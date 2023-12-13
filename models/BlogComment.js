const  Sequelize = require('sequelize');

const sequelize=require('../util/database');
const BlogComment=sequelize.define('BlogComment',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    comment:{
        type:Sequelize.STRING,
        allowNull:false
        
    },
    input:{
        type:Sequelize.STRING
    },
    div:{
        type:Sequelize.STRING
    }
})

module.exports=BlogComment;