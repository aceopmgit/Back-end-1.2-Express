const path=require('path')//kya kam hai iska ?

const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors')

const sequelize=require('./util/database')
const User=require('./models/User')

const app=express();

app.use(bodyparser.json({extended:false}))



app.use(cors())

app.post('/user/add-user',async(req,res,next)=>{
    try{
        const name=req.body.Name;
        const email=req.body.Email
        const phone=req.body.Phone;
        const data=await User.create({Name:name,Email:email,Phone:phone})
        res.status(201).json({newUserDetail:data});
    
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
})

app.get('/user/get-user',async(req,res,next)=>{
    try{
        const details= await User.findAll();
        res.status(201).json({allUserDetails:details});    
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
})

app.get('/user/edit-user/:id',async(req,res,next)=>{
    try{
        const id=req.params.id;
        const details= await User.findByPk(id);
        res.status(201).json({UserDetails:details});    
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
})

app.delete('/user/delete-user/:id',async(req,res,next)=>{
    try{
        const id=req.params.id;
        await User.destroy({where:{id:id}});
        res.sendStatus(200);
        //const details= await User.findByPk();
        //res.status(201).json({allUserDetails:details});    
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
})
app.get('/',(req,res,next)=>{
    console.log('Hello')
    res.send('<h1>Hello World</h1>')
})

sequelize
   .sync() //it syncs our models to the database by creating the appropriate tables and relations if we have them
   .then((result)=>{
    app.listen(3000);
   })
   .catch((err)=>{
    console.log(err)
   })


