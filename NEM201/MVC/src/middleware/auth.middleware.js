
const authMiddleware=(req,res,next)=>{

    if(!req.headers["authorization"]){
        return res.send("Please provide token")
    }
    next()
}

module.exports=authMiddleware