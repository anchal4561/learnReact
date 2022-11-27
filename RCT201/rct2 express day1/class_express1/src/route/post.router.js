const db=require("../db.json")
const fs=require("fs")
const express=require("express")

const app=express.Router();
app.get("/",(req,res)=>{

    let {name,messageMatch}=req.query
    let posts=db.posts;
    if(name){
        posts=posts.filter((post)=>post.name===name)
    }
    if(messageMatch){
        posts=posts.filter((post)=>post.message.includes(messageMatch))
    }
    res.send(posts)
})

app.get("/:id",(req,res)=>{
    console.log(req.method,req.url)
    let id=req.params.id;
    let numId=Number(id)
    let posts=db.posts.find((post)=>post.id===numId)
   if(posts){
    res.send(posts)
   }
   else{
    res.status(404).send(`post with ID:${id} not found`)
   }
})

app.post("/",(req,res)=>{
 console.log(req.method,req.url);


 db.posts.push({...req.body,
    id:Date.now()})
 fs.writeFile("./src/db.json",JSON.stringify(db)
 ,"utf-8",()=>{
    // res.status(201).set("content-type","text/html").send(db.posts)
    res.send(db.posts)
 })
})

app.delete("/:id",(req,res)=>{
    console.log(req.method,req.url);
    let id=req.params.id;
    let numId=Number(id)
    let posts=db.posts.filter((post)=>post.id!==numId)
    db.posts=posts
    fs.writeFile("./src/db.json",JSON.stringify(db)
 ,"utf-8",()=>{
    res.send("deleted successfully")
    })
    res.send("this is delete api")
   })

   app.patch("/",(req,res)=>{
    console.log("patch api")
   })

   module.exports=app;