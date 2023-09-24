import { Connection } from '@prisma/client'

export class ConnectionEntity implements Connection {
    id: string;
    description: string;
}
