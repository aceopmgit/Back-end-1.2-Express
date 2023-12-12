const BookSlot=require('../models/Book-slot');

exports.bookslot=async(req,res,next)=>{
    try{
        const Name=req.body.Name;
        const Email=req.body.Email;
        const Slot=req.body.Slot;
        const Button=req.body.Button
        const Time=req.body.Time
        const data=await BookSlot.create({Name:Name,Email:Email,Slot:Slot,Button:Button,Time:Time});
        res.status(201).json({newMeetingDetails:data});
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
}

exports.getAllMeetings=async (req,res,next)=>{
    try{
        
        const details=await BookSlot.findAll();
        res.status(201).json({allMeetingDetails:details});
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
}


exports.getMeetingDetails=async (req,res,next)=>{
    try{
        const id=req.params.id;
        const details=await BookSlot.findByPk(id);
        res.status(201).json({meetingDetails:details});
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
}


exports.UpdateSlot=async (req,res,next)=>{
    try{
        const id=req.params.id;
        
        const details=await BookSlot.destroy({where:{id:id}});
        
        res.sendStatus(200);
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
}

