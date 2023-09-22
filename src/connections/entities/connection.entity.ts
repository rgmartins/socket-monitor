import { Connection } from '@prisma/client'

export class ConnectionEntity implements Connection {
    id: number;
    description: string;
}
