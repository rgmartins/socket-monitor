import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateConnectionDto } from "../dto/create-connection.dto";
import { UpdateConnectionDto } from "../dto/update-connection.dto";

@Injectable()
export class ConnectionsRepository {
    constructor(private readonly prisma: PrismaService) { }

    create(createConnectionDto: CreateConnectionDto) {
        return 'This action adds a new connection';
    }

    findAll() {
        return `This action returns all connections`;
    }

    findOne(id: number) {
        return `This action returns a #${id} connection`;
    }

    update(id: number, updateConnectionDto: UpdateConnectionDto) {
        return `This action updates a #${id} connection`;
    }

    remove(id: number) {
        return `This action removes a #${id} connection`;
    }
}