import React,{useState} from "react";
import { useEffect } from "react";
import{useDispatch,useSelector} from "react-redux"
import {Link} from "react-router-dom"
import { addTodo,getTodos } from "../redux/todo/todo.actions";


const TodoApp = () => {
    const [data,setData]=useState("");
    const todos=useSelector((state)=>{
        return state.TodoApp.todos;
    })

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getTodos())
    },[])

  return (
    <div>
        <input type="text"
        value={data}
        onChange={({target})=>setData(target.value)}
        />
        <button onClick={()=>{
          dispatch(addTodo({name:data,status:false}))
          setData("")
        }}>
          Add Todo
        </button>
        {todos.map((elem)=>(
          <div key={elem.id}>
            <Link to={`/${elem.id}`}>
                  <div>
                    {elem.name}-{elem.status?"Completed":"Not Completed"}
                    </div>
            </Link>
          </div>
        )
        )}
    </div>
  )
}

export default TodoApp