import { ACTION_TYPE, PARAMETER_TYPE } from "./constants";
declare namespace Interfaces {
    interface Controller {
    }
    interface ActionDecorator {
        (target: any, key: string): void;
    }
    interface ControllerMetadata {
        namespace: string;
        target: any;
    }
    interface ControllerActionMetadata {
        key: string;
        name: string;
        type: ACTION_TYPE;
        target: any;
    }
    interface ControllerParameterMetadata {
        [methodName: string]: ParameterMetadata[];
    }
    interface ParameterMetadata {
        name: string;
        index: number;
        type: PARAMETER_TYPE;
    }
}
export { Interfaces };
