import {useState,useEffect} from "react" 
import {getTodos} from "./Api"
function Todos(){
    const [todos,setTodos]=useState([])
    useEffect(()=>{
        getTodos().then((res)=>setTodos(res.data))
        
    },[])

return (

   
    //when

    <div>        
        <h1>Todos</h1>
        {todos.map((item)=><p key={item.id}>{item.title}</p>)}
    </div>
)
}
export default Todos;