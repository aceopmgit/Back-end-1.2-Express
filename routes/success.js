

const express=require('express');

const router=express.Router()

const successController=require('../controllers/successController.js')

router.post('/',successController.postsuccess)

module.exports=router;