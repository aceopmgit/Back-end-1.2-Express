const express=require('express');

const router=express.Router();

router.get('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="get"><input id="username" type="text" name"username" placeholder="Enter Username"> <button type="submit">Submit</button></form>');
    
})

module.exports=router;



//'<form action="/" onsubmit="localStorage.setItem("username", document.getElementById(`username`).value)"  method="POST"><input id="username" type="Text" name="username" placeholder="Enter Username"><button type="submit">Submit</button></form>'