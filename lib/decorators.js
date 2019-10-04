"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var constants_1 = require("./constants");
function Controller(namespace) {
    return function (target) {
        var currentMetadata = {
            namespace: namespace,
            target: target
        };
        Reflect.defineMetadata(constants_1.METADATA_KEY.Controller, currentMetadata, target);
        var previousMetadata = Reflect.getMetadata(constants_1.METADATA_KEY.Controller, Reflect) || [];
        var newMetadata = __spreadArrays([currentMetadata], previousMetadata);
        Reflect.defineMetadata(constants_1.METADATA_KEY.Controller, newMetadata, Reflect);
    };
}
exports.Controller = Controller;
function OnConnect(name) {
    return function (target, key) {
        var metadata = {
            key: key,
            name: name,
            type: constants_1.ACTION_TYPE.CONNECT,
            target: target
        };
        var metadataList = [];
        if (!Reflect.hasMetadata(constants_1.METADATA_KEY.Action, target.constructor)) {
            Reflect.defineMetadata(constants_1.METADATA_KEY.Action, metadataList, target.constructor);
        }
        else {
            metadataList = Reflect.getMetadata(constants_1.METADATA_KEY.Action, target.constructor);
        }
        metadataList.push(metadata);
    };
}
exports.OnConnect = OnConnect;
function OnDisconnect(name) {
    return function (target, key) {
        var metadata = {
            key: key,
            name: name,
            type: constants_1.ACTION_TYPE.DISCONNECT,
            target: target
        };
        var metadataList = [];
        if (!Reflect.hasMetadata(constants_1.METADATA_KEY.Action, target.constructor)) {
            Reflect.defineMetadata(constants_1.METADATA_KEY.Action, metadataList, target.constructor);
        }
        else {
            metadataList = Reflect.getMetadata(constants_1.METADATA_KEY.Action, target.constructor);
        }
        metadataList.push(metadata);
    };
}
exports.OnDisconnect = OnDisconnect;
function OnMessage(name) {
    return function (target, key) {
        var metadata = {
            key: key,
            name: name,
            type: constants_1.ACTION_TYPE.MESSAGE,
            target: target
        };
        var metadataList = [];
        if (!Reflect.hasMetadata(constants_1.METADATA_KEY.Action, target.constructor)) {
            Reflect.defineMetadata(constants_1.METADATA_KEY.Action, metadataList, target.constructor);
        }
        else {
            metadataList = Reflect.getMetadata(constants_1.METADATA_KEY.Action, target.constructor);
        }
        metadataList.push(metadata);
    };
}
exports.OnMessage = OnMessage;
exports.SocketIO = paramDecoratorFactory(constants_1.PARAMETER_TYPE.SOCKET_IO);
exports.SocketID = paramDecoratorFactory(constants_1.PARAMETER_TYPE.SOCKET_ID);
exports.ConnectedSocket = paramDecoratorFactory(constants_1.PARAMETER_TYPE.CONNECTED_SOCKET);
exports.Payload = paramDecoratorFactory(constants_1.PARAMETER_TYPE.SOCKET_BODY);
exports.SocketQueryParam = paramDecoratorFactory(constants_1.PARAMETER_TYPE.SOCKET_QUERY_PARAM);
exports.SocketRequest = paramDecoratorFactory(constants_1.PARAMETER_TYPE.SOCKET_REQUEST);
exports.SocketRooms = paramDecoratorFactory(constants_1.PARAMETER_TYPE.SOCKET_ROOMS);
function paramDecoratorFactory(parameterType) {
    return function (name) {
        name = name || "default";
        return params(parameterType, name);
    };
}
function params(type, name) {
    return function (target, methodName, index) {
        var metadataList = {};
        var parameterMetadataList = [];
        var parameterMetadata = {
            index: index,
            name: name,
            type: type
        };
        if (!Reflect.hasMetadata(constants_1.METADATA_KEY.Parameter, target.constructor)) {
            parameterMetadataList.unshift(parameterMetadata);
        }
        else {
            metadataList = Reflect.getMetadata(constants_1.METADATA_KEY.Parameter, target.constructor);
            if (metadataList.hasOwnProperty(methodName)) {
                parameterMetadataList = metadataList[methodName];
            }
            parameterMetadataList.unshift(parameterMetadata);
        }
        metadataList[methodName] = parameterMetadataList;
        Reflect.defineMetadata(constants_1.METADATA_KEY.Parameter, metadataList, target.constructor);
    };
}
exports.params = params;
