const express =require('express');

const router=express.Router();

//const rootdir=require('../util/path.js')

const adminController=require('../controllers/adminController.js')

// admin/add-product=>get
router.get('/add-product',adminController.getaddproduct)

// admin/product=>post
router.post('/product',adminController.postproduct)



module.exports=router; 