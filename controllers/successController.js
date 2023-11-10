const path=require('path');

const rootdir=require('../util/path.js');

exports.postsuccess=(req,res,next)=>{
    console.log(req.body)
    res.sendFile(path.join(rootdir,'views','success.html'))
}