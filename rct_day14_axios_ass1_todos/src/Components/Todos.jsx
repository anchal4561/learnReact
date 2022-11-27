import React, { useEffect, useState } from "react"
import { getTodos, postTodos, deleteTodos, toggleTodos } from "./api";
import TodoList from './TodoList'
import AddToDo from './AddToDo'

const Todos=()=>{
    const [data,setData]=useState([])

    const handleGetTodos=()=>{
        getTodos()
        .then(res=>setData(res))
    }

    useEffect(()=>{
        handleGetTodos()
    },[])

    const handleAddTodo=(text)=>{
        
        text && postTodos(text).then(()=>handleGetTodos())
    }
    const handleDeleteTodo=(id)=>{
        deleteTodos(id)
        .then(()=>handleGetTodos())
    }

    const handleToggle=(id,status)=>{
        toggleTodos(id,status)
        .then(()=>handleGetTodos())
    }

    return(
        <div>
            <div>
                <AddToDo handleAddTodo={handleAddTodo}/>
            </div>
            <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <td>Todos</td>
            <td>Status</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {data.data?.map((item) => (
            <TodoList
              key={item.id}
              value={item}
              handleDelete={handleDeleteTodo}
              handleToggle = {handleToggle}
            />
          ))}
        </tbody>
      </table>
        </div>
    )
}
export default Todos;