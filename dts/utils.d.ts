import "reflect-metadata";
import { interfaces as inversifyInterfaces } from "inversify";
import { Interfaces } from "./interfaces";
export declare function getControllersFromContainer(container: inversifyInterfaces.Container, forceControllers: boolean): Interfaces.Controller[];
export declare function getControllersFromMetadata(): any[];
export declare function getControllerMetadata(constructor: any): Interfaces.ControllerMetadata;
export declare function getActionMetadata(constructor: any): Interfaces.ControllerActionMetadata[];
export declare function getParameterMetadata(constructor: any): Interfaces.ControllerParameterMetadata;
export declare function cleanUpMetadata(): void;
