const express=require("express")
const db=require("../db.json")
const compression=require("compression")

const multer=require("multer")
const cors=require("cors")
const PORT=8080;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })
  const upload=multer({storage:storage})
  
const userRouter=require("./route/user.route")
const productRouter=require("./route/products.route")

const logger=(req,res,next)=>{
    console.log("Before",req.method,req.url)
    next();
    console.log("After",req.method,req.url);
}

const logger2=(req,res,next)=>{
    console.log("Before2",req.method,req.url)
    next();
    console.log("After2",req.method,req.url);
}

const app=express()
app.use(express.json())
app.use(cors())
app.use(compression())
// app.use(auth)
app.use(logger)//global
app.use("/users",userRouter)
app.use("/products",productRouter)
app.use(logger2)

app.post("/file",upload.single("avatar"),(req,res)=>{
    res.send("File is uploaded")
})
app.post("/",logger2,(req,res)=>{
    res.send(db.products)
    res.send("POST working")
})
//local
app.get("/",logger2,(req,res)=>{
    res.send(db.products)
    res.send("Get working")
})

app.delete("/",(req,res)=>{
    res.send(db.products)
   res.send("Delete working")
})

app.listen(PORT,()=>{
    console.log(`listening on http://localhost:${PORT}`);
})