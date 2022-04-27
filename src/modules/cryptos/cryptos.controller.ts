import { Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';
import CryptoService from './cryptos.service';

export class CryptosController {

    service: CryptoService
    constructor(
    ){
        this.service = new CryptoService();
    }

    public getAllCryptos(req: Request, res: Response) {
        const allCryptos = this.service.getAll();
        res.status(200).json(allCryptos);
    }

     getSpecificCrypto(req: Request, res: Response) {
        const allCryptos = this.service.getOne(req.params.id);
        res.status(200).json(allCryptos);
    }

    async createNewCrypto(req: Request, res: Response) {
        console.log('req',req.body);
        res.status(200).json((await this.service.create(req.body)))
    }

    async deleteCrypto(req: Request, res: Response) {
        res.status(200).json((await this.service.delete(req.params.id)))
    }
}