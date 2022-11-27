
// 1//import 
const http=require("http");
const db=require("./db.json")
const fs =require("fs")
// 2//create
const server=http.createServer((req,res)=>{
    console.log(req.method,req.url)
    

    if(req.method==="GET"){
    if(req.url==="/"){
        res.write("<h1>Hello Home</h1>")
    }
    else if(req.url=="/products"){
        res.write("hello product")
    }
}
    else if(req.method==="POST"){
        if(req.url==="/products"){
            //updatae producsts
           db.products.push({id:1,content:"new product"})
            res.write(JSON.stringify(db.products))
        }
        else  if(req.url==="/users"){
            //updatae users
            db.users.push({id:1,name:"annya"})
            res.write(JSON.stringify(db.users))
        }

        fs.writeFileSync("./db.json",JSON.stringify(db))
    }
    res.end()
})

// 3//listen/start
server.listen(8080,()=>{
    console.log("Listening on localhost")
})