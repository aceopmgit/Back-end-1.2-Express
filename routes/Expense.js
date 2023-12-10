const express=require('express');

const expenseController=require('../controllers/Expense')

const router=express.Router();

router.post('/add-expense',expenseController.addExpense);

router.get('/get-expense',expenseController.getExpense);

router.get('/edit-expense/:id',expenseController.editExpense);

router.delete('/delete-expense/:id',expenseController.deleteExpense);

module.exports=router