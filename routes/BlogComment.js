const express=require('express');

const blogCommentController=require('../controllers/BlogComment');

const router=express.Router();

router.post('/add-comment',blogCommentController.addComment);

router.get('/show-comments',blogCommentController.showComments);

router.delete('/delete-comment/:id',blogCommentController.deleteComment)

module.exports=router