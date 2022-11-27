import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addTodo,updateTodo, deleteTodo, getTodos} from "../redux/todo/todo.actions"


const TodoApp = () => {
    const [value,setValue]=useState("")
    const todos=useSelector((store)=>store.todoApp.todos)
    const dispatch=useDispatch()

    useEffect(()=>{
        if(todos.length===0){
            dispatch(getTodos());
        }
       
    },[])
  return (
    <div>
        
        {todos.map((todo)=>(
            <div key={todo.id}>
                <span onClick={()=>dispatch(updateTodo({
                 ...todo,
                 status:!todo.status
                }))}>
                {todo.name} - {todo.status?"Completed":"Not Completed"}
                </span>

                <button onClick={()=>dispatch(deleteTodo(todo))}>DELETE</button>
                </div>
        ))}
        <div>
            <input value={value}
            onChange={({target})=>setValue(target.value)}/>
            <button onClick={()=>{dispatch(addTodo({
                name:value,
                status:false
            })
            );
            setValue("")
            }}>ADD</button>
        </div>
    </div>
  )
}

export default TodoApp