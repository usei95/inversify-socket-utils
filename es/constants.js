export var TYPE = {
    Controller: Symbol.for("SocketController")
};
export var METADATA_KEY = {
    Controller: "inversify-socket-utils:controller",
    Action: "inversify-socket-utils:controller-action",
    Parameter: "inversify-socket-utils:controller-parameter"
};
export var ACTION_TYPE;
(function (ACTION_TYPE) {
    ACTION_TYPE[ACTION_TYPE["MESSAGE"] = 0] = "MESSAGE";
    ACTION_TYPE[ACTION_TYPE["CONNECT"] = 1] = "CONNECT";
    ACTION_TYPE[ACTION_TYPE["DISCONNECT"] = 2] = "DISCONNECT";
})(ACTION_TYPE || (ACTION_TYPE = {}));
export var PARAMETER_TYPE;
(function (PARAMETER_TYPE) {
    PARAMETER_TYPE[PARAMETER_TYPE["CONNECTED_SOCKET"] = 0] = "CONNECTED_SOCKET";
    PARAMETER_TYPE[PARAMETER_TYPE["SOCKET_BODY"] = 1] = "SOCKET_BODY";
    PARAMETER_TYPE[PARAMETER_TYPE["SOCKET_QUERY_PARAM"] = 2] = "SOCKET_QUERY_PARAM";
    PARAMETER_TYPE[PARAMETER_TYPE["SOCKET_IO"] = 3] = "SOCKET_IO";
    PARAMETER_TYPE[PARAMETER_TYPE["SOCKET_ID"] = 4] = "SOCKET_ID";
    PARAMETER_TYPE[PARAMETER_TYPE["SOCKET_REQUEST"] = 5] = "SOCKET_REQUEST";
    PARAMETER_TYPE[PARAMETER_TYPE["SOCKET_ROOMS"] = 6] = "SOCKET_ROOMS";
})(PARAMETER_TYPE || (PARAMETER_TYPE = {}));
export var DUPLICATED_CONTROLLER_NAME = function (name) {
    return "Two controllers cannot have the same name: " + name;
};
export var NO_CONTROLLERS_FOUND = "No controllers have been found! " +
    "Please ensure that you have register at least one Controller.";
