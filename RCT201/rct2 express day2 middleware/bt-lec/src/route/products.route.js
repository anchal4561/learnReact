const express=require("express")
const db=require("../../db.json")

const app=express.Router();

app.get("",(req,res)=>{

    res.send(db.products)
})

module.exports=app;