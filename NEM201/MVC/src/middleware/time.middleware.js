const timeMiddleware=(config)=>{

    return(req,res,next)=>{
        next()
    }
   
}
//currying
module.exports=timeMiddleware