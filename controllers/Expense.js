const Expense=require('../models/Expense');

exports.addExpense=async(req,res,next)=>{
    try{
        const Amount=req.body.amount;
        const Description=req.body.description;
        const Category=req.body.category;
        const data=await Expense.create({Amount:Amount,Description:Description,Category:Category});
        res.status(201).json({newExpenseDetails:data});
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
}

exports.getExpense=async (req,res,next)=>{
    try{
        
        const details=await Expense.findAll();
        res.status(201).json({allExpenseDetails:details});
    }
    catch{
        res.status(500).json({
            Error:err
        })
    }
}

exports.editExpense=async (req,res,next)=>{
    try{
        const id=req.params.id;
        const details=await Expense.findByPk(id);
        res.status(201).json({expenseDetails:details});
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
}

exports.deleteExpense=async (req,res,next)=>{
    try{
        const id=req.params.id;
        await Expense.destroy({where:{id:id}});
         res.sendStatus(200)
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
}