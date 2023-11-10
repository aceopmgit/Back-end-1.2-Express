const path=require('path');

const rootdir=require('../util/path.js');

exports.getcontactus=(req,res,next)=>{
    //console.log("In the middleware");
    res.sendFile(path.join(rootdir,'views','contact-us.html'))
}