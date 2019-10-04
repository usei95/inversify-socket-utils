import "reflect-metadata";
import { TYPE, ACTION_TYPE, PARAMETER_TYPE } from "./constants";
import { getControllerMetadata, getActionMetadata, getParameterMetadata, getControllersFromContainer } from "./utils";
var InversifySocketServer = /** @class */ (function () {
    function InversifySocketServer(container, server) {
        this.container = container;
        this.server = server;
    }
    InversifySocketServer.prototype.build = function () {
        this.registerControllers();
        return this.server;
    };
    InversifySocketServer.prototype.registerControllers = function () {
        var _this = this;
        var controllers = getControllersFromContainer(this.container, false);
        controllers.forEach(function (controller) {
            var controllerMetadata = getControllerMetadata(controller.constructor);
            var actionMetadata = getActionMetadata(controller.constructor);
            var parameterMetadata = getParameterMetadata(controller.constructor);
            if (controllerMetadata && actionMetadata) {
                _this.server.of(controllerMetadata.namespace).on("connection", function (socket) {
                    _this.handleConnection(socket, controllerMetadata, actionMetadata, parameterMetadata);
                });
            }
        });
    };
    InversifySocketServer.prototype.handleConnection = function (socket, controllerMetadata, actionMetadata, parameterMetadata) {
        var _this = this;
        actionMetadata.forEach(function (metadata) {
            switch (metadata.type) {
                case ACTION_TYPE.CONNECT:
                    _this.handleAction(socket, controllerMetadata, metadata, parameterMetadata);
                    break;
                case ACTION_TYPE.DISCONNECT:
                    socket.on("disconnect", function () {
                        _this.handleAction(socket, controllerMetadata, metadata, parameterMetadata);
                    });
                    break;
                case ACTION_TYPE.MESSAGE:
                    socket.on(metadata.name, function (payload) {
                        _this.handleAction(socket, controllerMetadata, metadata, parameterMetadata, payload);
                    });
                    break;
            }
        });
    };
    InversifySocketServer.prototype.handleAction = function (socket, controller, action, parameters, payload) {
        var _a;
        var paramList = [];
        if (parameters) {
            paramList = parameters[action.key] || [];
        }
        var args = this.extractParams(socket, payload, paramList);
        (_a = this.container.getNamed(TYPE.Controller, controller.target.name))[action.key].apply(_a, args);
    };
    InversifySocketServer.prototype.extractParams = function (socket, payload, params) {
        var _this = this;
        var args = [];
        params.forEach(function (_a) {
            var type = _a.type, index = _a.index, name = _a.name;
            switch (type) {
                case PARAMETER_TYPE.CONNECTED_SOCKET:
                    args[index] = socket;
                    break;
                case PARAMETER_TYPE.SOCKET_IO:
                    args[index] = _this.server;
                    break;
                case PARAMETER_TYPE.SOCKET_QUERY_PARAM:
                    args[index] = socket.handshake.query[name];
                    break;
                case PARAMETER_TYPE.SOCKET_ID:
                    args[index] = socket.id;
                    break;
                case PARAMETER_TYPE.SOCKET_REQUEST:
                    args[index] = socket.request;
                    break;
                case PARAMETER_TYPE.SOCKET_ROOMS:
                    args[index] = socket.rooms;
                    break;
                default:
                    args[index] = payload;
                    break;
            }
        });
        return args;
    };
    return InversifySocketServer;
}());
export { InversifySocketServer };
