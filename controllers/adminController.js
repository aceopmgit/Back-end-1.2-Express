const path=require('path')
const rootdir=require('../util/path.js')

exports.getaddproduct=(req,res,next)=>{
    //console.log("In the middleware");
    res.sendFile(path.join(rootdir,'views','add-product.html'))
}

exports.postproduct=(req,res,next)=>{
    console.log(req.body)
    res.redirect('/shop');
}