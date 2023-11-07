const express=require('express')
const bodyparser=require('body-parser');

const app=express();

const adminRoutes=require('./routes/admin.js')
const shopRoutes=require('./routes/shop.js')


app.use(bodyparser.urlencoded({extended:false}))


app.use(adminRoutes);
app.use(shopRoutes);


app.listen(4000);

