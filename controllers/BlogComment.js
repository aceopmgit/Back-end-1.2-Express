const BlogComment=require('../models/BlogComment');

exports.addComment=async(req,res,next)=>{
    try{
        const comment=req.body.comment;
        const input=req.body.input;
        const div=req.body.div;
       
        const data=await BlogComment.create({comment:comment,input:input,div:div});
        res.status(201).json({newcomment:data});
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
}

exports.showComments=async (req,res,next)=>{
    try{
        
        const details=await BlogComment.findAll();
        res.status(201).json({allcomments:details});
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
}

exports.deleteComment=async(req,res,next)=>{
    try{
        const id=req.params.id;
        await BlogComment.destroy({where:{id:id}});
        res.sendStatus(200);
    
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
}


