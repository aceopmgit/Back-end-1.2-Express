

const express=require('express')

const bodyparser=require('body-parser');

const app=express();

app.use(bodyparser.urlencoded({extended:false}))

/*
app.use('/',(req,res,next)=>{
    console.log("hello")
    next();
})
*/


app.use('/add-product',(req,res,next)=>{
    //console.log("In the middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')    
})

app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
})


app.use('/',(req,res,next)=>{
    //console.log("In another middleware");
    res.send('<h1>Hello from Express.js</h1>')    
})


app.listen(4000);

