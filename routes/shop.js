const express=require('express');

const router=express.Router();

// shop/add-product=>get
router.get('/',(req,res,next)=>{
    //console.log("In another middleware");
    res.send('<h1>Hello from Express.js</h1>')    
})

module.exports=router;