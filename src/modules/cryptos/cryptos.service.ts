import { PrismaClient } from '@prisma/client';
import { ICreateCrypto } from './cryptos.interface';

const prisma = new PrismaClient();
export default class CryptosServices {

    async getAll() {
        return await prisma.cryptos.findMany();
    }

    async getOne(id: string) {
        return await prisma.cryptos.findUnique({
            where: {
                id
            }
        });
    }

    async create(data: ICreateCrypto){
        return await prisma.cryptos.create({
            data: data
        })
    }

    async delete(id: string){
        return await prisma.cryptos.delete({
            where: {
                id
            }
        })
    }
}