import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express'
import ExpensesServices from './expenses.service';

export class ExpensesController {

    service: ExpensesServices
    constructor(
    ){
        this.service = new ExpensesServices();
    }

    async getAllExpenses(req: Request, res: Response) {
        res.status(200).json((await this.service.getAll()))
    }

    async getSpecificExpense(req: Request, res: Response) {
        res.status(200).json((await this.service.getOne(req.params.id)))
    }

    async createNewExpense(req: Request, res: Response) {
        res.status(200).json((await this.service.create(req.body)))
    }

    async deleteExpense(req: Request, res: Response) {
        res.status(200).json((await this.service.delete(req.params.id)))
    }
}