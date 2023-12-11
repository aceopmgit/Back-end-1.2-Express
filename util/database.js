const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('mydb','root','Ace@1535',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;