const {Schema, model}=require("mongoose")

const UsersSchema = new Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    age:Number
    })

    const UserModel = model("user", UsersSchema)

    module.exports = UserModel
