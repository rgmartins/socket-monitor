export class CreateConnectionDto {
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
