import "reflect-metadata";
import { METADATA_KEY, NO_CONTROLLERS_FOUND } from "./constants";
import { TYPE } from "./constants";
export function getControllersFromContainer(container, forceControllers) {
    if (container.isBound(TYPE.Controller)) {
        return container.getAll(TYPE.Controller);
    }
    else if (forceControllers) {
        throw new Error(NO_CONTROLLERS_FOUND);
    }
    else {
        return [];
    }
}
export function getControllersFromMetadata() {
    var arrayOfControllerMetadata = Reflect.getMetadata(METADATA_KEY.Controller, Reflect) || [];
    return arrayOfControllerMetadata.map(function (metadata) { return metadata.target; });
}
export function getControllerMetadata(constructor) {
    var controllerMetadata = Reflect.getMetadata(METADATA_KEY.Controller, constructor);
    return controllerMetadata;
}
export function getActionMetadata(constructor) {
    var actionMetadata = Reflect.getMetadata(METADATA_KEY.Action, constructor);
    return actionMetadata;
}
export function getParameterMetadata(constructor) {
    var parameterMetadata = Reflect.getMetadata(METADATA_KEY.Parameter, constructor);
    return parameterMetadata;
}
export function cleanUpMetadata() {
    Reflect.defineMetadata(METADATA_KEY.Controller, [], Reflect);
}
