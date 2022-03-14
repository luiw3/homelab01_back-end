import { PrismaClient } from '@prisma/client';
import { ICreateExpense } from './expenses.interface';

const prisma = new PrismaClient();
export default class ExpensesServices {
    constructor (
    ){

    }

    async getAll() {
        return prisma.expenses.findMany();
    }

    async getOne(id: string) {
        return prisma.expenses.findUnique({
            where: {
                id
            }
        });
    }

    async create(data: ICreateExpense){
        return prisma.expenses.create({
            data: data
        })
    }

    async delete(id: string){
        return prisma.expenses.delete({
            where: {
                id
            }
        })
    }
}