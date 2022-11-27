const fs=require("fs")

//non blocking
 console.log("before")
 fs.readFile("./sample.txt","utf-8",(err,data)=>console.log(data))
 console.log("after")

 console.log("before-2")
 let data=fs.readFileSync("./sample.txt","utf-8")
 console.log("data2",data)
 console.log("after -2")