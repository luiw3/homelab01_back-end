import { PrismaClient } from '@prisma/client';
import { Request, Response} from 'express'
import GoalsServices from './goals.service';

export class GoalsController {

    service: GoalsServices
    constructor(
    ){
        this.service = new GoalsServices();
    }

    async getAllGoals(req: Request, res: Response) {
        res.status(200).json((await this.service.getAll()))
    }

    async getSpecificGoal(req: Request, res: Response) {
        res.status(200).json((await this.service.getOne(req.params.id)))
    }

    async createNewGoal(req: Request, res: Response) {
        res.status(200).json((await this.service.create(req.body)))
    }

    async deleteGoal(req: Request, res: Response) {
        res.status(200).json((await this.service.delete(req.params.id)))
    }
}