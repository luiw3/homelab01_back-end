import { PrismaClient } from '@prisma/client';
import { ICreateGoal } from './goals.interface';


const prisma = new PrismaClient();
export default class GoalsServices {
    constructor (
    ){

    }

    async getAll() {
        return prisma.goals.findMany();
    }

    async getOne(id: string) {
        return prisma.goals.findUnique({
            where: {
                id
            }
        });
    }

    async create(data: ICreateGoal){
        return prisma.goals.create({
            data: data
        })
    }

    async delete(id: string){
        return prisma.goals.delete({
            where: {
                id
            }
        })
    }
}