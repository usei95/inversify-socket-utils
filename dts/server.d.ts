import "reflect-metadata";
import * as inversify from "inversify";
import * as SocketIO from "socket.io";
export declare class InversifySocketServer {
    server: SocketIO.Server;
    private container;
    constructor(container: inversify.Container, server: SocketIO.Server);
    build(): SocketIO.Server;
    private registerControllers;
    private handleConnection;
    private handleAction;
    private extractParams;
}
