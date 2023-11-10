const path=require('path');

const express=require('express');

const router=express.Router()

const rootdir=require('../util/path.js');

router.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootdir,'views','error-page.html'))
})

module.exports=router;