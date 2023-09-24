import * as net from 'net';
export interface SocketInterface {
    id: number,
    description: string,
    queueName: string,
    ip?: string,
    port: number,
    role: 'server' | 'client',
    numConnections: number,
    header: string,
    probe?: string,
}
export interface SocketsInterface {
    id: number,
    socket: net.Socket;
    dateTime: Date;
    numberMessagesInp: number,
    numberBytesInp: number,
    numberMessagesOut: number,
    numberBytesOut: number,
    lengthMax: number;
    buffer: Buffer;
}
export interface SocketConexaoInterface {
    SocketConexaoSocketUsado: number;
    socketConexaoDados: SocketInterface;
    socketConexaoSockets: SocketsInterface[]
}
