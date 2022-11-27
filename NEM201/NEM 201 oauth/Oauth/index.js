const express = require("express");
const axios = require('axios');
const fetch = require("node-fetch")

const app = express();

const CLIENT_ID = "8623a707673880d55646"
const CLIENT_SECRET ="03803c44bd97d09d9b175d6a6b7df65908a2d3d4"

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/github/callback", async(req,res)=>{
    const {code} = req.query;
    console.log("Github Code",code)

   const {access_token}  = await fetch("https://github.com/login/oauth/access_token",{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body: JSON.stringify({
            client_id:CLIENT_ID,
            client_secret:CLIENT_SECRET,
            code
        })
    }
).then((e)=>e.json())
.catch(console.error)

   const userDetails = await fetch("https://api.github.com/user",{
      headers:{
        Authorization:`Bearer ${access_token}`
      }
   }).then((x)=>x.json())
   .catch(console.error)

   console.log(userDetails);
    return res.send("sign in with github success")
})

app.listen(8070,()=>{
    console.log("server started")
})