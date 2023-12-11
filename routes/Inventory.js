const express=require('express');

const inventoryController=require('../controllers/Inventory')

const router=express.Router();

router.post('/add-Inventory',inventoryController.addInventory);

router.get('/get-Inventory',inventoryController.getInventory);

router.get('/get-InventoryItem/:id',inventoryController.getInventoryItem);


router.post('/update-Inventory',inventoryController.updateInventoryItem);



module.exports=router