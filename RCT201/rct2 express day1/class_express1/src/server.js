const express=require("express")
const app=express()
const postRoutes=require("./route/post.router")
const productsRoutes=require("./route/products.route")

//.use telling exprress on how to aprse req body
app.use(express.json())
app.use("/posts",postRoutes)
app.use("/products",productsRoutes)
app.get("/",(req,res)=>{
    res.send("Hello Anchal")
})



app.listen(8080,()=>{
    console.log("listening localhost")
})

