import { PrismaClient } from '@prisma/client';
import { ICreateExpense } from './expenses.interface';

export default class ExpensesServices {
    constructor (
        private prisma: PrismaClient
    ){

    }

    async getAll() {
        return this.prisma.expenses.findMany();
    }

    async getOne(id: string) {
        return this.prisma.expenses.findUnique({
            where: {
                id
            }
        });
    }

    async create(data: ICreateExpense){
        return this.prisma.expenses.create({
            data: data
        })
    }

    async delete(id: string){
        return this.prisma.expenses.delete({
            where: {
                id
            }
        })
    }
}