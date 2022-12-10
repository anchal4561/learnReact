//to do the logic

const StudentModel = require("../models/student.model");

async function createStudent({name,age,studentcode}){
    
    if(age>18){
        return{
            msg:"NOt OK",
            desc:"student above age 18 are not allowed"
        }  
    }
    const student=new StudentModel({name,age,studentcode})
    await student.save()
    return{
        message:"OK",
        desc:"student created successfully"
    }  
}

async function findStudent(id){
    if(id){
        const student=await StudentModel.findById(id)
        return student
    }
    else{
        const students=await StudentModel.find().limit(10);
        return students;
    }
}

module.exports={createStudent,findStudent}