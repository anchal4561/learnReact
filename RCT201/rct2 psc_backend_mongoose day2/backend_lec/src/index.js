require("dotenv").config();
const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const connect=require("./config/db")
const PORT=process.env.PORT;
const userRoute=require("./features/user/user.route")
const productRoute=require("./features/product/product.route")
const cartRoute=require("./features/cart/cart.route")


//to connect monggoose  needed schema and model
//schema:INfo about structure of data
//model:instance of the collection

const app=express()
app.use(express.json())
app.use(cors())
app.use("/users",userRoute)
app.use("/products",productRoute)
app.use("/carts",cartRoute)

app.listen(PORT,async ()=>{
    try{
        await connect();
    }
    catch(err){
        console.log(err)
    }
   
    console.log(`Listening at http://localhost:${PORT}`);
})