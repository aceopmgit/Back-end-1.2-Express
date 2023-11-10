const path=require('path')
const express=require('express')
const bodyparser=require('body-parser');

const app=express();

const adminRoutes=require('./routes/admin.js')
const shopRoutes=require('./routes/shop.js')
const contactusRoutes=require('./routes/contactus.js')
const successRoutes=require('./routes/success.js')
const errorRoutes=require('./routes/error404.js')


app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))//for addimg style sheet statically to html file 


app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use('/contactus',contactusRoutes)
app.use('/success',successRoutes)
app.use(errorRoutes)



app.listen(4000);

