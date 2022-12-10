const express=require("express")
const {studentRouter,teacherRouter}=require("./routes")
const auth=require("./middleware/auth.middleware")

const time=require("./middleware/time.middleware")

const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//middleware
app.use(auth)
app.use(time())

//routes
app.use("/students",studentRouter)
app.use("/teachers",teacherRouter)



app.listen(8080,()=>{
console.log("server started on 8080")
})