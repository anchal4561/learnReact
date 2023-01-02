const express = require("express");

const User = require("./user.model");

const app = express.Router();
const jwt=require("jsonwebtoken")

const authMiddleware = async(req,res,next)=>{

    const token=req.headers["authorization"]
    if(!token){
        return res.send("Unauthorized")
    }
    try{
        const verification=jwt.verify(token,"SECRET1234")
        //const decode=jwt.decode(token)
        if(verification){
           next();
        }
        else{
            res.status(402).send("Not Verified")
        }

    }
    catch(e){
        return res.send(`invalid token`)
    }
}

app.get("/", async(req,res)=>{
    let users = await User.find({},{password:0})
    res.send(users)
})

app.get("/:id", authMiddleware, async(req,res)=>{
    let id = req.params.id
   try {
       let user = await User.findById(id)
       res.status(200).send(user)
   } catch (error) {
      res.status(401).send("User not found")
   }
})

app.post("/signup", async(req,res)=>{
    const {email,name,password,age,gender} = req.body;
 try {
    let existingUser = await User.findOne({email});
     if (existingUser){
        res.status(404).send("User already exist")
     }else{
        let user = await User.create({
            email,name,password,age,gender
        })
        res.status(201).send("user created successfully")
     }
 } catch (error) {
    res.status(404).send(error.message)
 }

})

app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email,password})
    if(user){
        //generate token
        const token=jwt.sign(
        { 
        id:user._id,name:user.name,age:user.age},
        "SECRET1234",
        {expiresIn:"7 days"}
        );

        const refreshToken=jwt.sign(
            {id:user._id},
            "REFRESH1234",
            {expiresIn:"28 days"},
        )

        //jwt.verify(token,"SECRET12345")
        return res.send({message:"Login Success",token,refreshToken})
    }
    return res.status(401).send("Invalid Credentials");
})

app.post("/refresh",(req,res)=>{
    const refreshToken=req.headers["authorization"]
    if(!refreshToken){
        return res.status(401).send("unauthorized")
    }
    try{
        const verification=jwt.verify(refreshToken,"REFRESH1234")
        console.log(verification)
        if(verification){
            //const userData=await UserModelfindOne({_id:verification.id})
            const newToken=jwt.sign(
        {id:verification.id}
        ,"SECRET1234",{expiresIn:"7 days"}

        )
            return res.send({token:newToken})
        }
    }
    catch(e){
        //refresg token expired ,redirect user to login
    }
})

app.delete("/:id", authMiddleware, async(req,res)=>{
    let id =  req.params.id
    try {
        let user = await User.findByIdAndDelete(id)
        res.send("User Deleted")
    } catch (error) {
        res.status(401).send(error.message)
    }
})

module.exports = app;