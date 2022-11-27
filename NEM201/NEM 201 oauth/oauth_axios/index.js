const { default: axios } = require("axios");
const express=require("express")
const mongoose=require("mongoose");
const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const CLIENT_ID="0cfdb2dd1b00c7784229"//DOTENV
const CLIENT_SECRET="93e16f4905a9ef48ea60169e1090dd0ec7cb2288"
app.get("/",(req,res)=>res.sendFile(__dirname+"/index.html"))

app.get("/github/callback",async(req,res)=>{
    //client seret code=code
    const {code}=req.query;
   console.log("Github code",code);
   //const userdata=fetch(`whatever.github.com/api?code=${code}`)
   //const user=await UserModel.create({...userdata}) 
   
   const {access_token}=await axios({url:'https://github.com/login/oauth/access_token',
    method:"POST",
    headers:{
        accept:"application/json",
        "content-type":"application/json"
    },
    body:JSON.stringify({
        client_id:CLIENT_ID,
        client_secret:CLIENT_SECRET,
        code,
    })
  // }
    
   })
//    'https://github.com/login/oauth/access_token',{
//     method:"POST",
//     headers:{
//         accept:"application/json",
//         "content-type":"application/json"
//     },
//     body:JSON.stringify({
//         client_id:CLIENT_ID,
//         client_secret:CLIENT_SECRET,
//         code,
//     })
//    }
   //)
   .then((e)=>e.json())
   .catch(console.error)
   console.log("Access",access_token)

   const userDetails=await axios.get(
    "https://api.github.com/user",{
    headers:{
        Authorization:`Bearer ${access_token}`,
    }
   })
   .then((x)=>x.json())
   .catch(console.error);
   console.log(userDetails)
   return res.send("sign in with github success")
})

// /google/callback
//mongoose.connect("mongodb://localhost:27017/b21new").then(()=>{
    app.listen(8080,()=>{
        console.log("server started on port 8080")
    })
//})
