import { Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';
import CryptoService from './cryptos.service';

export class CryptosController {

    service: CryptoService
    constructor(
    ){
        this.service = new CryptoService(new PrismaClient());
    }

    async getAllCryptos(req: Request, res: Response) {
        res.status(200).json((await this.service.getAll()))
    }

    async getSpecificCrypto(req: Request, res: Response) {
        res.status(200).json((await this.service.getOne(req.params.id)))
    }

    async createNewCrypto(req: Request, res: Response) {
        res.status(200).json((await this.service.create(req.body)))
    }

    async deleteCrypto(req: Request, res: Response) {
        res.status(200).json((await this.service.delete(req.params.id)))
    }
}