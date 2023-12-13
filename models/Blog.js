const  Sequelize = require('sequelize');

const sequelize=require('../util/database');
const Blog=sequelize.define('Blog',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    author:{
        type:Sequelize.STRING,
        allowNull:false
    },
    content:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=Blog;