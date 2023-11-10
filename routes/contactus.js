const path=require('path');

const express=require('express');

const router=express.Router()

const rootdir=require('../util/path.js');

const contactusController=require('../controllers/contactusController.js')

router.get('/',contactusController.getcontactus)

module.exports=router;