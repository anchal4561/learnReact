
export default function User(req,res){
    //first connecr to mongo .conn
    res.send("Hello user")
}

// app.get("/user",(req,res)=>{
//    const user=UserModel.find()
//     res.send("Hello user")
// })

// app.get("/user/:id",(req,res)=>{
//    const user=UserModel.find()
//     res.send("Hello user")
// })

// app.get("/user/:name",(req,res)=>{
//    const user=UserModel.find()
//     res.send("Hello user")
// })