const User=require('../models/User');

exports.addUser=async(req,res,next)=>{
    try{
        const name=req.body.Name;
        const email=req.body.Email
        const phone=req.body.Phone;
        const data=await User.create({Name:name,Email:email,Phone:phone})
        res.status(201).json({newUserDetail:data});
    
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
}

exports.getUser=async(req,res,next)=>{
    try{
        const details= await User.findAll();
        res.status(201).json({allUserDetails:details});    
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
}

exports.editUser=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const details= await User.findByPk(id);
        res.status(201).json({UserDetails:details});    
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
}

exports.deleteUser=async(req,res,next)=>{
    try{
        const id=req.params.id;
        await User.destroy({where:{id:id}});
        res.sendStatus(200);
        //const details= await User.findByPk();
        //res.status(201).json({allUserDetails:details});    
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
}