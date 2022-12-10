//const UserType={name:string,age:number}

const {Schema,model}=require("mongoose")
const StudentSchema=new Schema({

    name:String,
    age:Number,
    unit:String,
    scores:Number,
    studentcode:String,
})

const StudentModel=model("student",StudentSchema)

module.exports=StudentModel