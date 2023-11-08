const express=require("express");
const bodyParser=require("body-parser");

const chat=express();

const messageRoutes=require('C:/Users/Singh/Desktop/sachin/Javascript/Assignment/002 Kickstarting Web Devlopment/001 Starting off with Web Development/005ExpressJs/002SimpleGroupChatApp/routes/message.js')
const loginRoutes=require('C:/Users/Singh/Desktop/sachin/Javascript/Assignment/002 Kickstarting Web Devlopment/001 Starting off with Web Development/005ExpressJs/002SimpleGroupChatApp/routes/login.js')

chat.use(bodyParser.urlencoded({extended:false}))

chat.use(loginRoutes);
chat.use(messageRoutes);


chat.listen(4000);



