const express=require("express")
const app=express.Router();
const User=require("./user.model")


app.post("/login",async(req,res)=>{

    const {email,password}=req.body;
    try{

        let user=await User.findOne({email})
        if(user){
            if(password===user.password){
                res.send({
                    token:`${user.email}_#_${user.password}`,
                    user,
                }
                )
            }
            else{
                res.status(401).send(`Authentication Failure,incorect password`)
            }
        }
        else{
                res.status(404).send(`User with email: ${email} not found`)
            }
    }
    catch(e){
        res.status(404).send(e.message)
    }
})

app.post("/signup",async(req,res)=>{
    const {email,password,name,age}=req.body;
    try{
        
        let existingUser=await User.findOne({email})
        if(existingUser){
            res.status(404).send("Cant create an user with existing email")
        }
        else{
            let user=await User.create({
                email,
                password,
                name,
                age,
            })
        res.send({token:`${user.email}_#_${user.password}`})
        }
        }
    catch(e){
        res.status(404).send(e.message)
    }
})

module.exports=app;