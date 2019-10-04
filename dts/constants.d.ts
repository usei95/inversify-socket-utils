export declare const TYPE: {
    Controller: symbol;
};
export declare const METADATA_KEY: {
    Controller: string;
    Action: string;
    Parameter: string;
};
export declare enum ACTION_TYPE {
    MESSAGE = 0,
    CONNECT = 1,
    DISCONNECT = 2
}
export declare enum PARAMETER_TYPE {
    CONNECTED_SOCKET = 0,
    SOCKET_BODY = 1,
    SOCKET_QUERY_PARAM = 2,
    SOCKET_IO = 3,
    SOCKET_ID = 4,
    SOCKET_REQUEST = 5,
    SOCKET_ROOMS = 6
}
export declare const DUPLICATED_CONTROLLER_NAME: (name: string) => string;
export declare const NO_CONTROLLERS_FOUND: string;
