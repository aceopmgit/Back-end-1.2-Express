const path=require('path');

const express=require('express');

const rootdir=require('../util/path.js')

const router=express.Router();

// shop/add-product=>get
router.get('/',(req,res,next)=>{
    //console.log("In another middleware");
    res.sendFile(path.join(rootdir,'views','shop.html'))   
})

module.exports=router;