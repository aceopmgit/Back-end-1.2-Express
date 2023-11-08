const express=require('express');
const fs=require('fs')

const router=express.Router();


router.get('/',(req,res,next)=>{
    //console.log(req.body.username)
    fs.readFile('C:/Users/Singh/Desktop/sachin/Javascript/Assignment/002 Kickstarting Web Devlopment/001 Starting off with Web Development/005ExpressJs/002SimpleGroupChatApp/routes/message.txt',{encoding:'utf-8'},(err,data)=>{
        if(err){
            data="NO data"
            console.log(err)
        }
        res.send(`${data}<form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"><input type="hidden" name="username" id="username"><input type="Text" name="message" placeholder="Enter Meassage"><button type="Submit">Send Message</button></form>`);
    })    
    
    

})

router.post('/',(req,res,next)=>{
    //console.log(req.body.username)
    //console.log(req.body.message)

    fs.writeFile('C:/Users/Singh/Desktop/sachin/Javascript/Assignment/002 Kickstarting Web Devlopment/001 Starting off with Web Development/005ExpressJs/002SimpleGroupChatApp/routes/message.txt',`${req.body.username} :${req.body.message}`,{flag:'a'},(err)=>{            // {flag:'a'} =>for appending to existing file    
        err ? console.log(err) : res.redirect('/')               
})
 
    
})



module.exports=router;

/*





                const message=`${req.body.username} :${req.body.message}`
    console.log(message)

    fs.readFile('C:/Users/Singh/Desktop/sachin/Javascript/Assignment/002 Kickstarting Web Devlopment/001 Starting off with Web Development/005ExpressJs/002SimpleGroupChatApp/routes/message.txt',{encodind:'utf-8'},(err,data)=>{
        if(data===undefined){
            //res.send(`<h4>${req.body.username} :${req.body.message}</h4>`)
            fs.writeFile('C:/Users/Singh/Desktop/sachin/Javascript/Assignment/002 Kickstarting Web Devlopment/001 Starting off with Web Development/005ExpressJs/002SimpleGroupChatApp/routes/message.txt',message,(err)=>{                
               if(err){
                console.log(err)
               }           
        })
              
            
        }
    })


            */
