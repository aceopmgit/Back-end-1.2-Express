const Inventory=require('../models/Inventory');

exports.addInventory=async(req,res,next)=>{
    try{
        const iName=req.body.iName;
        const iDescription=req.body.iDesc;
        const iPrice=req.body.iPrice;
        const iQuantity=req.body.iQuant;
        const data=await Inventory.create({iName:iName,iDescription:iDescription,iPrice:iPrice,iQuantity:iQuantity});
        res.status(201).json({newInventoryItem:data});
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
}

exports.getInventory=async (req,res,next)=>{
    try{
        
        const details=await Inventory.findAll();
        res.status(201).json({allInventoryItems:details});
    }
    catch{
        res.status(500).json({
            Error:err
        })
    }
}

exports.getInventoryItem=async (req,res,next)=>{
    try{
        const id=req.params.id;
        const details=await Inventory.findByPk(id);
        res.status(201).json({InventoryItem:details});
    }
    catch{
        res.status(500).json({
            Error:err
        })
    }
}

exports.updateInventoryItem=async (req,res,next)=>{
    try{
        const id=req.body.id;
        const iItem=await Inventory.findByPk(id);
        const quantity=req.body.quantity;
        iItem.iQuantity=quantity;
        iItem.save();
        res.sendStatus(200);
    }
    catch{
        res.status(500).json({
            Error:err
        })
    }
}

