import express from "express";
import { ExpensesController } from './modules/expenses/expenses.controller'
import { CryptosController } from './modules/cryptos/cryptos.controller'
import { GoalsController } from './modules/goals/goals.controller'

const expenses = new ExpensesController();
const cryptos = new CryptosController();
const goals = new GoalsController();

const routes = express.Router();

routes.get('/expenses', expenses.getAllExpenses);

routes.get('/expenses/:id', expenses.getSpecificExpense);

routes.post('/expenses', expenses.createNewExpense);

routes.delete('/expenses/:id', expenses.deleteExpense)


routes.get('/cryptos', cryptos.getAllCryptos)

routes.get('/cryptos/:id', cryptos.getSpecificCrypto)

routes.post('/cryptos', cryptos.createNewCrypto);

routes.delete('/cryptos/:id', cryptos.deleteCrypto);


routes.get('/goals', goals.getAllGoals)

routes.get('/goals/:id', goals.getSpecificGoal)

routes.post('/goals', goals.createNewGoal);

routes.delete('/goals/:id', goals.deleteGoal);

export default routes