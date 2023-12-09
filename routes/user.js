const express=require('express');

const userController=require('../controllers/User')

const router =express.Router();

router.post('/add-user',userController.addUser)

router.get('/get-user',userController.getUser)

router.get('/edit-user/:id',userController.editUser)

router.delete('/delete-user/:id',userController.deleteUser)

module.exports=router;