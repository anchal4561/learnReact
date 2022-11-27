const express=require("express")
const app=express.Router();
const Product=require("./product.model")

app.get("/",async(req,res)=>{
    const {limit=10,page=1}=req.query;
    try{
        let products=await Product.find()
        .limit(limit)
        .skip((page-1)*limit)
        res.send(products)
    }
    catch(e){
        res.status(404).send(e.message)
    }
})



module.exports=app;