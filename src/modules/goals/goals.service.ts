import { PrismaClient } from '@prisma/client';
import { ICreateGoal } from './goals.interface';

export default class GoalsServices {
    constructor (
        private prisma: PrismaClient
    ){

    }

    async getAll() {
        return this.prisma.goals.findMany();
    }

    async getOne(id: string) {
        return this.prisma.goals.findUnique({
            where: {
                id
            }
        });
    }

    async create(data: ICreateGoal){
        return this.prisma.goals.create({
            data: data
        })
    }

    async delete(id: string){
        return this.prisma.goals.delete({
            where: {
                id
            }
        })
    }
}