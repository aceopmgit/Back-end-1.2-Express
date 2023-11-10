const path=require('path')

const express =require('express');

const router=express.Router();

const rootdir=require('../util/path.js')

// admin/add-product=>get
router.get('/add-product',(req,res,next)=>{
    //console.log("In the middleware");
    res.sendFile(path.join(rootdir,'views','add-product.html'))
})

router.get('/contactus',(req,res,next)=>{
    //console.log("In the middleware");
    res.sendFile(path.join(rootdir,'views','contact-us.html'))
})

router.post('/success',(req,res,next)=>{
    console.log(req.body)
    res.sendFile(path.join(rootdir,'views','success.html'))
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