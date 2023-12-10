const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Expense=sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    Amount:{
        type:Sequelize.INTEGER,
        allowNull:false,        
    },
    Description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Category:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=Expense;