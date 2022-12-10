const express = require("express");
const axios = require('axios');
const fetch = require("node-fetch")

const app = express();
const passport=require("./config/google-oauth")

const CLIENT_ID="0cfdb2dd1b00c7784229"//DOTENV
const CLIENT_SECRET="93e16f4905a9ef48ea60169e1090dd0ec7cb2288"

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get('/users/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/users/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' ,session:false}),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log(req.user)
    res.send("sign in with google success")
  // res.redirect('/');
  });

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

app.listen(8080,()=>{
    console.log("server started")
})