const express=require("express")
const app=express()
const PORT=process.env.PORT

app.use(express.json())
app.use(cors())
app.listen(8080,()=>{
    console.log(`listening to  http://localhost:${PORT}`)
})