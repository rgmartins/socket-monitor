import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateConnectionDto } from "../dto/create-connection.dto";
import { UpdateConnectionDto } from "../dto/update-connection.dto";

@Injectable()
export class ConnectionsRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(createConnectionDto: CreateConnectionDto) {
        const connection = await this.prisma.connection.create({
            data: createConnectionDto
        });
    }

    findAll() {
        const connections = this.prisma.connection.findMany();
    }

    findOne(id: number) {
        const connection = this.prisma.connection.findUnique({ where: { id } });
    }

    update(id: number, updateConnectionDto: UpdateConnectionDto) {
        const connection = this.prisma.connection.update({ where: { id }, data: updateConnectionDto });
    }

    remove(id: number) {
        const connection = this.prisma.connection.delete({ where: { id } });
    }
    
}