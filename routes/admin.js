const express =require('express');

const router=express.Router();

// admin/add-product=>get
router.get('/add-product',(req,res,next)=>{
    //console.log("In the middleware");
    res.send('<form action="/admin/product" method="POST"><input type="text" name="product"><br><input type="Number" name="size"><button type="submit">Add Product</button></form>')    
})

// admin/product=>post
router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/shop');
})


/*
router.use('/',(req,res,next)=>{
    console.log("hello")
    next();
})
*/
module.exports=router; 