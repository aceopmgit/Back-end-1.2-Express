const express =require('express');

const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    //console.log("In the middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="product"><br><input type="Number" name="size"><button type="submit">Add Product</button></form>')    
})

router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
})


/*
router.use('/',(req,res,next)=>{
    console.log("hello")
    next();
})
*/
module.exports=router; 