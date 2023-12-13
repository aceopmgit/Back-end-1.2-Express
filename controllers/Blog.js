const Blog=require('../models/Blog');

exports.addblog=async(req,res,next)=>{
    try{
        const title=req.body.title;
        const author=req.body.author;
        const content=req.body.content;
        
        const data=await Blog.create({title:title,author:author,content:content});
        res.status(201).json({newBlogDetails:data});
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
}

exports.showBlogs=async (req,res,next)=>{
    try{
        
        const details=await Blog.findAll();
        res.status(201).json({allBlogDetails:details});
    }
    catch(err){
        res.status(500).json({
            Error:err
        })
    }
}


