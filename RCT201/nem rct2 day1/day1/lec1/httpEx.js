const http=require("http");
const server=http.createServer((req,res)=>{
    //Hnadler 


    if(req.url==="/web"){
        return(res.end("<h1>HElloo welcome</h1>"))
    }

    res.write("heello")
    res.write("world")
    res.end("!")
})

//start a server
server.listen(8080,()=>{
    console.log("server started on loclhost:8080")
})
