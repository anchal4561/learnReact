const {Router}=require("express")
const StudentModel=require("../models/student.model")
const studentRouter=Router()
const {createStudent,findStudent}=require("../controllers/student.controller")


studentRouter.get("/",async()=>{
 const allStudents=await findStudent();
 return res.send(allStudents)
})

studentRouter.get("/:id",async()=>{
    const student=await findStudent(id);
    return res.send(student)
   })

studentRouter.post("/",async(req,res)=>{
    const {name,age,studentcode}=req.body;
    const {message}=await createStudent({name,age,studentcode})
    if(message !="OK"){
        return res.send("Student creation failed")
    }
    return res.send("Student created successfully")
})

studentRouter.put("/",()=>{
    
})
studentRouter.delete("/",()=>{
    
})

studentRouter.get("/",()=>{
    
})

studentRouter.get("/",()=>{
    
})

module.exports={studentRouter}

// try{
//     throw Error("Not working")
// }
// catch(e){
//     if(e instanceof Error){

//     }

// }