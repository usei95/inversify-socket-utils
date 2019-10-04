var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import "reflect-metadata";
import { METADATA_KEY, ACTION_TYPE, PARAMETER_TYPE } from "./constants";
export function Controller(namespace) {
    return function (target) {
        var currentMetadata = {
            namespace: namespace,
            target: target
        };
        Reflect.defineMetadata(METADATA_KEY.Controller, currentMetadata, target);
        var previousMetadata = Reflect.getMetadata(METADATA_KEY.Controller, Reflect) || [];
        var newMetadata = __spreadArrays([currentMetadata], previousMetadata);
        Reflect.defineMetadata(METADATA_KEY.Controller, newMetadata, Reflect);
    };
}
export function OnConnect(name) {
    return function (target, key) {
        var metadata = {
            key: key,
            name: name,
            type: ACTION_TYPE.CONNECT,
            target: target
        };
        var metadataList = [];
        if (!Reflect.hasMetadata(METADATA_KEY.Action, target.constructor)) {
            Reflect.defineMetadata(METADATA_KEY.Action, metadataList, target.constructor);
        }
        else {
            metadataList = Reflect.getMetadata(METADATA_KEY.Action, target.constructor);
        }
        metadataList.push(metadata);
    };
}
export function OnDisconnect(name) {
    return function (target, key) {
        var metadata = {
            key: key,
            name: name,
            type: ACTION_TYPE.DISCONNECT,
            target: target
        };
        var metadataList = [];
        if (!Reflect.hasMetadata(METADATA_KEY.Action, target.constructor)) {
            Reflect.defineMetadata(METADATA_KEY.Action, metadataList, target.constructor);
        }
        else {
            metadataList = Reflect.getMetadata(METADATA_KEY.Action, target.constructor);
        }
        metadataList.push(metadata);
    };
}
export function OnMessage(name) {
    return function (target, key) {
        var metadata = {
            key: key,
            name: name,
            type: ACTION_TYPE.MESSAGE,
            target: target
        };
        var metadataList = [];
        if (!Reflect.hasMetadata(METADATA_KEY.Action, target.constructor)) {
            Reflect.defineMetadata(METADATA_KEY.Action, metadataList, target.constructor);
        }
        else {
            metadataList = Reflect.getMetadata(METADATA_KEY.Action, target.constructor);
        }
        metadataList.push(metadata);
    };
}
export var SocketIO = paramDecoratorFactory(PARAMETER_TYPE.SOCKET_IO);
export var SocketID = paramDecoratorFactory(PARAMETER_TYPE.SOCKET_ID);
export var ConnectedSocket = paramDecoratorFactory(PARAMETER_TYPE.CONNECTED_SOCKET);
export var Payload = paramDecoratorFactory(PARAMETER_TYPE.SOCKET_BODY);
export var SocketQueryParam = paramDecoratorFactory(PARAMETER_TYPE.SOCKET_QUERY_PARAM);
export var SocketRequest = paramDecoratorFactory(PARAMETER_TYPE.SOCKET_REQUEST);
export var SocketRooms = paramDecoratorFactory(PARAMETER_TYPE.SOCKET_ROOMS);
function paramDecoratorFactory(parameterType) {
    return function (name) {
        name = name || "default";
        return params(parameterType, name);
    };
}
export function params(type, name) {
    return function (target, methodName, index) {
        var metadataList = {};
        var parameterMetadataList = [];
        var parameterMetadata = {
            index: index,
            name: name,
            type: type
        };
        if (!Reflect.hasMetadata(METADATA_KEY.Parameter, target.constructor)) {
            parameterMetadataList.unshift(parameterMetadata);
        }
        else {
            metadataList = Reflect.getMetadata(METADATA_KEY.Parameter, target.constructor);
            if (metadataList.hasOwnProperty(methodName)) {
                parameterMetadataList = metadataList[methodName];
            }
            parameterMetadataList.unshift(parameterMetadata);
        }
        metadataList[methodName] = parameterMetadataList;
        Reflect.defineMetadata(METADATA_KEY.Parameter, metadataList, target.constructor);
    };
}
