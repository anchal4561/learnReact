require("dotenv").config();
const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const connect=require("./config/db")
const PORT=process.env.PORT;
const userRoute=require("./users/user.route")


//to connect monggoose  needed schema and model
//schema:INfo about structure of data
//model:instance of the collection

const app=express()
app.use(express.json())
app.use(cors())
app.use("/users",userRoute)

app.listen(PORT,async ()=>{
    try{
        await connect();
    }
    catch(err){
        console.log(err)
    }
   
    console.log(`Listening at http://localhost:${PORT}`);
})