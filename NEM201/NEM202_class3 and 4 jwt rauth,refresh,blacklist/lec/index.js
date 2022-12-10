const express=require("express")
const mongoose=require("mongoose");
const argon2=require("argon2")
const UserModel = require("./models/user.model");
const jwt=require("jsonwebtoken")
const app=express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
const blacklist=[]
const nodemailer=require("nodemailer")

//templating
// const fs=require("fs/promises")

const fs=require("fs")
const hbs=require("handlebars")
const template=hbs.compile(fs.readFileSync("./mail.hbs","utf-8"));

const emailUsername="remington66@ethereal.email"
const emailPassword="zjAFJ4c2HP9U43Z9tD"



const transport=nodemailer.createTransport({
    host:"smtp.ethereal.email",
    port:587,
    auth:{
        user:emailUsername,
        pass:emailPassword,
        // oauth2:{

        // }
    }
})


// app.use((req,res,next)=>{
// const token=req.headers.authorization;
// if(!token){
//     return res.send("give token")
// }
// try{
//     const verification=jwt.verify(token,"SECRET1234")
//     if(verification.exp >new Date().getTime()){
//         return res.send("token expired")
//     }
//     if(blacklist.includes(token)){
//         return res.send("token already expired")
//     }
//     next();
// }
// catch{}
// }
// )


app.post("/signup",async(req,res)=>{
    const {name,email,password,age}=req.body;

    //access based role
    // const token=req.headers["authorization"];

    // try
    // {
    //     //decode token
    //FIRST CREATE SIGNUP LOGIN THEN TO VERIFY ADMIN USE THIS->//const decoded=jwt.verify(token,"ADMIN")
    //     const decoded=jwt.decode(token);
    //     if(decoded){
    //         if(decoded.role==="admin"){
    //             const user=new UserModel({
    //                 name,
    //                 email,
    //                 password,
    //                 age,
    //                 role:"instructor"
    //             })
    //             await user.save();
    //             return res.send("Instructor created successfully")
    //         }
    //         else{
    //             return res.status(403).send("You are not allowed to create instructor")
    //         }
    //     }
    // }
    // catch(e){
    //     console.log("non admin user tried to create an instructor account")
    // }

    const hash=await argon2.hash(password)
    const user=new UserModel({name,email,password:hash,age});
    await user.save();
    //user creation success then send mail 
    // const html =await fs.readFile("./mail.html","utf-8")
    transport.sendMail({
        to:email,
        from:"system@mysite.com",
        subject:"signup success",
        // html:`<h2>Hello ${name}</h2><p>Sign up success thank you</p>`
        // html,
        // html:html.replace("{{user}}",name)
        html:template({
            user:name,
            license:age>18?"You are eligible":"You are not eligible",
        })
    })
    return res.status(201).send("Student created successfully")
})

app.post("/createlecture",(req,res)=>{
    const token=req.headers.authorization;
    try{
        const {role}=jwt.decode(token);
        if(role !=="instructor"){
            return res.status(403).send("You are not allowed to create lecture")
        }
        else{
            //create lecture  store into db
            return res.send("lecture created successfully")
        }
    }
    catch(e){
        console.log("err",e);
        return res.send("never happening")
    }
})

app.post("/signup/instructor",async(req,res)=>{
    const {name,email,password,age}=req.body;
    //verify token ,verify role
    const user=new UserModel({name,email,password,age,role:"instructor"})
    await user.save();
    return res.status(201).send("Instructor created successfully")
})

app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    // const incominghash=await argon2.hash(password)
    const user=await UserModel.findOne({email})
    if(await argon2.verify(user.password,password)){
        //generate token
        const token=jwt.sign(
        { 
        id:user._id,name:user.name,age:user.age,role:user.role},
        "SECRET1234",
        {
            expiresIn:"7 days"
        }
        );

        const refreshToken=jwt.sign({},"REFRESHTOKEN",
        {expiresIn:"28 days"}
        )

        //jwt.verify(token,"SECRET12345")
        return res.status(200).send({message:"Login Success",token,refreshToken})
    }
    return res.status(401).send("Invalid Credentials");

})

app.get("/user/:id",async(req,res)=>{
    const {id}=req.params;
    const token=req.headers["authorization"]
    if(!token){

        return res.send("Unauthorized")
    }
    if(blacklist.includes(token)){
        return res.send("token already expired")
    }
    try{
        const verification=jwt.verify(token,"SECRET1234")
        //const decode=jwt.decode(token)
        if(verification){
            //all good
            const user=await UserModel.findOne({_id:id})
            return res.send(user)
        }
    }
    catch(e){
        return res.send(e.message,"Invalid token")
        console.log(e.message)
    }
})

app.post("/refresh",(req,res)=>{
    const refreshToken=req.headers["authorization"]
    if(!refreshToken){
        return res.status(401).send("unauthorized")
    }
    try{
        const verification=jwt.verify(refreshToken,"REFRESHTOKEN")
        console.log(verification)
        if(verification){
            //const userData=await UserModelfindOne({_id:verification.id})
            const newToken=jwt.sign(
        {id:verification.id,name:verification.name,age:verification.age}
        ,"SECRET1234",{expiresIn:"7 days"}

        )
            return res.send({token:newToken})
        }
    }
    catch(e){
        //refresg token expired ,redirect user to login
    }
})

app.post("/logout",(req,res)=>{
    const token=req.headers.authorization;
    blacklist.push(token)
    return res.send("user logged out successfully")
})

app.get("/",(req,res)=>res.send("hello"))


mongoose.connect("mongodb://localhost:27017/b21new").then(()=>{
    app.listen(8080,()=>{
        console.log("server started on port 8080")
    })
})
