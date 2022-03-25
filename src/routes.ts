import express from "express";
import { ExpensesController } from './modules/expenses/expenses.controller'
import { CryptosController } from './modules/cryptos/cryptos.controller'
import { GoalsController } from './modules/goals/goals.controller'
import { loggerMiddleware } from './middlewares/logger.middleware'

const expenses = new ExpensesController();
const cryptos = new CryptosController();
const goals = new GoalsController();
const routes = express.Router();

routes.get('/expenses', loggerMiddleware, (req,res) => expenses.getAllExpenses(req,res));

routes.get('/expenses/:id', loggerMiddleware ,(req,res) => expenses.getSpecificExpense(req,res));

routes.post('/expenses', loggerMiddleware, (req,res) => expenses.createNewExpense(req,res));

routes.delete('/expenses/:id',loggerMiddleware, (req,res) => expenses.deleteExpense(req,res))

// the following way doesn't works
// routes.get('/cryptos', cryptos.getAllCryptos)

routes.get('/cryptos', (req,res) => cryptos.getAllCryptos(req,res))

routes.get('/cryptos/:id', (req,res) => cryptos.getSpecificCrypto(req,res))

routes.post('/cryptos', (req,res) => cryptos.createNewCrypto(req,res));

routes.delete('/cryptos/:id', (req,res) => cryptos.deleteCrypto(req,res));


routes.get('/goals', (req,res) => goals.getAllGoals(req,res))

routes.get('/goals/:id',(req,res) => goals.getSpecificGoal(req,res))

routes.post('/goals', (req,res) => goals.createNewGoal(req,res));

routes.delete('/goals/:id', (req,res) => goals.deleteGoal(req,res));

export default routes