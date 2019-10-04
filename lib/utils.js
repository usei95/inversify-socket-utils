"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var constants_1 = require("./constants");
var constants_2 = require("./constants");
function getControllersFromContainer(container, forceControllers) {
    if (container.isBound(constants_2.TYPE.Controller)) {
        return container.getAll(constants_2.TYPE.Controller);
    }
    else if (forceControllers) {
        throw new Error(constants_1.NO_CONTROLLERS_FOUND);
    }
    else {
        return [];
    }
}
exports.getControllersFromContainer = getControllersFromContainer;
function getControllersFromMetadata() {
    var arrayOfControllerMetadata = Reflect.getMetadata(constants_1.METADATA_KEY.Controller, Reflect) || [];
    return arrayOfControllerMetadata.map(function (metadata) { return metadata.target; });
}
exports.getControllersFromMetadata = getControllersFromMetadata;
function getControllerMetadata(constructor) {
    var controllerMetadata = Reflect.getMetadata(constants_1.METADATA_KEY.Controller, constructor);
    return controllerMetadata;
}
exports.getControllerMetadata = getControllerMetadata;
function getActionMetadata(constructor) {
    var actionMetadata = Reflect.getMetadata(constants_1.METADATA_KEY.Action, constructor);
    return actionMetadata;
}
exports.getActionMetadata = getActionMetadata;
function getParameterMetadata(constructor) {
    var parameterMetadata = Reflect.getMetadata(constants_1.METADATA_KEY.Parameter, constructor);
    return parameterMetadata;
}
exports.getParameterMetadata = getParameterMetadata;
function cleanUpMetadata() {
    Reflect.defineMetadata(constants_1.METADATA_KEY.Controller, [], Reflect);
}
exports.cleanUpMetadata = cleanUpMetadata;
