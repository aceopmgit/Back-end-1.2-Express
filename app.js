const express=require('express')
const bodyparser=require('body-parser');

const app=express();

const adminRoutes=require('./routes/admin.js')
const shopRoutes=require('./routes/shop.js')


app.use(bodyparser.urlencoded({extended:false}))


app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
})


app.listen(4000);

