const path=require('path')

const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors')

const sequelize=require('./util/database')

const userRoutes=require('./routes/User')
const serverRoutes=require('./routes/server');
const expenseRoutes=require('./routes/Expense');
const inventoryRoutes=require('./routes/Inventory')
const bookSlotRoutes=require('./routes/Book-slot')

const app=express();

app.use(bodyparser.json({extended:false}))

app.use(cors())

app.use('/user',userRoutes);
app.use(serverRoutes);
app.use('/expense',expenseRoutes);
app.use('/inventory',inventoryRoutes)
app.use('/bookSlots',bookSlotRoutes);

sequelize
   .sync() //it syncs our models to the database by creating the appropriate tables and relations if we have them
   .then((result)=>{
    app.listen(3000);
   })
   .catch((err)=>{
    console.log(err)
   })


