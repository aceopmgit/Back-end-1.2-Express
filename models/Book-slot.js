const  Sequelize = require('sequelize');

const sequelize=require('../util/database');
const Slot=sequelize.define('Slot',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    Slot:{
        type:Sequelize.INTEGER
    },
    Button:{
        type:Sequelize.STRING,        
        allowNull:false
    },
    Time:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=Slot;