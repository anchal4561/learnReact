import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { deleteTodo,getSingleTodos,updateTodo } from "../redux/todo/todo.actions";

function SingleTodo(){
    let {id}=useParams();
    const navigate=useNavigate();
    const todos=useSelector((state)=>{
        return state.todoApp.single_todos;
    })
    console.log(todos)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getSingleTodos(id))
    },[])
    return(
        <div>
            {todos.id}
            {todos.name}-{todos.status ?"Completed":"Not Completed"}
            <button onClick={()=>dispatch(updateTodo({...todos,status: !todos.status}))}>
            Change Status
            </button>
            <button onClick={()=>(dispatch(deleteTodo(todos.id)),navigate("/"))}>
                Delete
            </button>
        </div>
    )
}

export default SingleTodo;