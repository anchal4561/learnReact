const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    id:Number,
    name:{type:String,required:true},
    lname:{type:String,required:true},
    email:{type:String,required:true},
    gender:{type:String,enum:["Male","Female"],required:true},
    age:{type:Number,required:true,min:20,max:60,default: 20},
},
{
    versionKey:false,
    timestamps:true,
})

//model:instance of collections//Users here is object of our database
const Users=mongoose.model("user",userSchema)

module.exports=Users;