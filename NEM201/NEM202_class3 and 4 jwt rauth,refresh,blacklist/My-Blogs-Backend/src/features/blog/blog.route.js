const express = require("express");
const User = require("../user/user.model")
const Blogs = require("./blog.model");
const jwt=require("jsonwebtoken")

const app = express.Router();
const authMiddleware = async(req,res,next)=>{

    const token=req.headers["authorization"]
    if(!token){

        return res.send("Unauthorized")
    }
    try{
        const verification=jwt.verify(token,"SECRET1234")
        //const decode=jwt.decode(token)
        if(verification){
            req.userId = verification.id
           next();
        }
        else{
            res.status(402).send("Not Verified")
        }

    }
    catch(e){
        return res.send(`invalid token`)
    }
}

// const authMiddleware = async (req, res, next) => {
//     let token = req.headers.token;
//     console.log(token)
//     if (!token) {
//         return res.send("Token not found")
//     }
//     let [id, email, password] = token.split(":");
//     try {
//         let user = await User.findOne({ _id: id });
//         if (user) {
//             if (email == user.email && password == user.password) {
//                 req.userId = user.id
//                 next();
//             } else {
//                 res.status(402).send("Operation not allowed")
//             }
//         }
//     } catch (error) {
//         res.status(400).send(error.message)
//     }
// }

app.use(authMiddleware);

app.get("/", async (req, res) => {
    const {page=1, limit=5} = req.query;
try {
    let blogs = await Blogs.find({ author: req.userId }).limit(limit).skip((page - 1) * limit).populate({ path: 'author', select:['email',"name","age","gender"] })
    res.send(blogs)
} catch (error) {
    res.status(404).send(error.message)
} 
})

app.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
        let blog = await Blogs.find({ author: req.userId, _id: id }).populate({ path: 'author', select: ['email', "name", "age", "gender"] })
        res.send(blog)
    } catch (error) {
        res.status(404).send(error.message)
    }
})


app.post("/", async (req, res) => {
    try {
            let blog = await Blogs.create({
              ...req.body, author:req.userId
            })
            res.send(blog)
        }
     catch (error) {
        res.status(404).send(error.message)
    }

})

app.delete("/:id", async (req, res) => {
    let id = req.params.id
    try {
        let blog = await Blogs.findByIdAndDelete(id)
        res.send("Blog Deleted")
    } catch (error) {
        res.status(401).send(error.message)
    }
})

app.patch("/:id", async (req,res)=>{
    let id = req.params.id;
    try {
        let blog = await Blogs.findByIdAndUpdate(id, { ...req.body }, { new: true }).populate({ path: 'author', select: ['email', "name", "age", "gender"] })
        res.send(blog)
    } catch (error) {
        
    }
})




module.exports = app;