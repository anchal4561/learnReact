const express=require("express")
const http=require("http");
const {Server}=require("socket.io")

const app=express()//not a server using for routing
//instance of express
// const app2=new express()
//start server with http
const httpServer=http.createServer(app);

const io=new Server(httpServer)
let totalUsers=0;
const history=[]
io.on("connection",(socket)=>{
    totalUsers+=1;
    console.log("A new user connected,total users: ",totalUsers)
    socket.broadcast.emit("newuser",totalUsers)// other than own msg send that joined
    
    //when new connection send history to that
    socket.emit("history",history)

    socket.on("newtext",(message)=>{
        history.push(message)
        //notify other of this message
        io.emit("newtext",message)
        console.log("New msg recieved",message)
    })

    socket.on("disconnect",()=>{
        totalUsers-=1
        console.log("A user disconnected,total users",totalUsers)
       
    })
})


app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get("/",(req,res)=>res.sendFile(__dirname+"/index.html"))

httpServer.listen(8080,()=>{
console.log("server started on 8080")
})