const express=require("express")
const app=express.Router()

const auth=(req,res,next)=>{
    if(req.body &&
        req.body.username==="Anchal" 
        &&req.body.password==="123"
        ){
            next()
        }
        else{
            res.send("Not Authenticated")
        }
  }


app.use(auth)
app.get("",(req,res)=>{
    res.send("Get all users")

})

app.get(":id",(req,res)=>{
    res.send("Get one users")

})

app.post("/login",(req,res)=>{
    res.send("Authenticated")

})


module.exports=app;

