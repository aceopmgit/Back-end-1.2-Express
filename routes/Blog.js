const express=require('express');

const blogController=require('../controllers/Blog');

const router=express.Router();

router.post('/add-blog',blogController.addblog);

router.get('/show-blogs',blogController.showBlogs);

module.exports=router