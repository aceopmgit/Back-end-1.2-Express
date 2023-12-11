const  Sequelize = require('sequelize');

const sequelize=require('../util/database');
const User=sequelize.define('Inventory',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    iName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    iDescription:{
        type:Sequelize.STRING,
        allowNull:false
    },
    iPrice:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    iQuantity:{
        type:Sequelize.INTEGER,
        
    }
})

module.exports=User;