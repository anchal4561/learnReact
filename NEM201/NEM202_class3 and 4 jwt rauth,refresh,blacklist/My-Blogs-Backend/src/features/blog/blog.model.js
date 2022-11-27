const mongoose = require("mongoose");
//const User = require("../user/user.route")

const blogSchema = new mongoose.Schema({
    content: {type:String, required:true},
    isCompleted:{type:Boolean, default:false},
    author: { type: mongoose.Schema.Types.ObjectId, ref: "user" , required: true }
})

const Blogs = mongoose.model("blog", blogSchema)

module.exports = Blogs;