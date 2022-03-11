import { PrismaClient } from '@prisma/client';
import { ICreateCrypto } from './cryptos.interface';

export default class CryptosServices {
    constructor (
        private prisma: PrismaClient
    ){

    }

    async getAll() {
        return this.prisma.cryptos.findMany();
    }

    async getOne(id: string) {
        return this.prisma.cryptos.findUnique({
            where: {
                id
            }
        });
    }

    async create(data: ICreateCrypto){
        return this.prisma.cryptos.create({
            data: data
        })
    }

    async delete(id: string){
        return this.prisma.cryptos.delete({
            where: {
                id
            }
        })
    }
}