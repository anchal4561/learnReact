import React, { useState } from 'react'
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

import {FcFullTrash} from "react-icons/fc"
import {MdDone, MdOutlineRemoveDone} from "react-icons/md"

let todo={id:1,content:"todo number 1",status:true}
type Todo={
    id:number;
    content:string;
    status:boolean;
}



const TodoApp = () => {
    const [todos,setTodos]=useState<Todo[]>([])
    
    const addTodo=(newTodo:string)=>{
        setTodos(
            [
                ...todos,
                {
                    id:Date.now(),
                    content:newTodo,
                    status:false
                }
            ]
        )
    }

    const toggleStatus=(id:number)=>{

        let updatedTodos=todos.map((todo)=>{
            if(todo.id===id){
                todo.status=!todo.status;
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const deleteTodo=(id:number)=>{
        let updatedTodos=todos.filter((todo)=>todo.id !=id)
        setTodos(updatedTodos)
    }
    return (
    <div>
        <h4>TODO App</h4>
        <TodoInput onAdd={addTodo}/>
        { todos.map((todo)=>(
                <TodoItem
                 key={todo.id} 
                 {...todo}
                toggleStatus={toggleStatus}
                completedIcon={<MdDone/>}
                inCompletedIcon={<MdOutlineRemoveDone/>}
                deleteIcon={<FcFullTrash onClick={()=>deleteTodo(todo.id)}/>}
                >
                    {todo.content}
                </TodoItem>
            
            ))       
        }
        </div>
   
  )
}

export default TodoApp