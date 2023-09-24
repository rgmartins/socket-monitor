import { Connection } from '@prisma/client'

export class ConnectionEntity implements Connection {
    id: string;
    connectionId: string;
    description: string;
    queueName: string;
    ip: string;
    port: number;
    role: string;
    numConnections: number;
    header: string;
    probe: string;
}
