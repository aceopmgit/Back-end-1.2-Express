const path=require('path')
const express=require('express')
const bodyparser=require('body-parser');

const app=express();

const adminRoutes=require('./routes/admin.js')
const shopRoutes=require('./routes/shop.js')


app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))//for addimg style sheet statically to html file 


app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','error-page.html'))
})


app.listen(4000);

