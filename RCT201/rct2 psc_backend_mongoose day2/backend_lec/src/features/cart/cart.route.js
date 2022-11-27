const express=require("express")
const app=express.Router();
const Cart=require("./cart.model")
const User=require("../user/user.model");
const Product=require("../product/product.model")

const authMiddleware=async(req,res,next)=>{
    let token=req.headers.token;
    if(!token)
    {
        return res.send("Missing token")
    }
    let [email,password]=token.split("_#_")
    console.log(email,password)
    try{
        let user=await User.findOne({email})
       console.log(user)
        if(user){
            if(password===user.password){
                req.userId=user.id;
                next()
            }
            else{
                res.status(401).send(`Authentication Failure,incorect password`)
            }
        }
        else{
                res.status(404).send(`User with email: ${email} not found`)
            }
    }
    catch(e){
        res.status(404).send(e.message)
    }
}

app.use(authMiddleware)

app.get("/",async(req,res)=>{
    try{
       console.log(req.userId)
        let carts=await Cart.find({user:req.userId}).populate(["user","product"])
        res.send(carts)
    }
    catch(e){
        res.status(404).send(e.message)
    }
})

app.post("/", async (req, res) => {
    try {
      let cartItem = await Cart.findOne({
        user: req.userId,
        product: req.body.product,
      }).populate("product");
  
      if (cartItem.product.quantity < req.body.quantity) {
        return res.send(
          `This item is not able in the required quanitity, max quanity allowed is ${cartItem.product.quantity}`
        );
      }
  
      if (cartItem) {
        let item = await Cart.findByIdAndUpdate(
          cartItem.id,
          {
            quantity: req.body.quantity,
          },
          {
            new: true,
          }
        ).populate("product");
        return res.send(item);
      } else {
        let item = await Cart.create({
          ...req.body,
          user: req.userId,
        });
        return res.send(item);
      }
    } catch (e) {
      res.status(500).send(e.message);
    }
  });
  
module.exports=app;