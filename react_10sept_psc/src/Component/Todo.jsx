
import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { TodoList } from "./TodoList";

const getTodos=(args={})=>{
    const {
    titleSortBy="ASC"
    }=args;
   return  fetch(`http://localhost:3000/tasks?_sort=title&_order=${titleSortBy}`).then(res=>res.json())
}

const addTodos=(todo)=>{
    return fetch(`http://localhost:3000/tasks`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(todo)
    })
    .then(res=>res.json())
}

const toggleTodo=(id,newStatus)=>{
    return fetch(`http://localhost:3000/tasks/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({status:newStatus})
    })
    .then(res=>res.json())
}

const deleteTodo=(id)=>{
    return fetch(`http://localhost:3000/tasks/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
    })
    .then(res=>res.json())
}



function Todo(){
    const [loading,setLoading]=useState(false)
    const [todos,setTodos]=useState([]);
    const [titleSortBy,setTitleSortBy]=useState("ASC")

    useEffect(()=>{
        handleGetTodos();   
    },[titleSortBy])

    const handleGetTodos=()=>{
        setLoading(true)
        return getTodos({titleSortBy})
        .then(res=>{
            setLoading(false)
            setTodos(res)
            console.log(res)
        })
        .catch(err=>{
            setLoading(false)
        })
    }
    
    const handleAdd=(text)=>{
        const item ={
            title:text,
            status:false
        }
        setLoading(true)
        addTodos(item).then(res=>{
            console.log(res)
            handleGetTodos()
            setLoading(false)
        })
        .catch(err=>{
            setLoading(false)
        })
    }
    const handleToggle=(id,newStatus)=>{
        setLoading(true)
        toggleTodo(id,newStatus)
        .then(res=>{
            handleGetTodos();
            setLoading(false)
        })
        .catch(err=>{
            setLoading(false)
        })
    }
    const handleDelete=(id)=>{
        setLoading(true)
        deleteTodo(id)
        .then(res=>{
            handleGetTodos()
            setLoading(false)
        })
        .catch(err=>{
            setLoading(false)
        })
    }

    return (
        <div>
            <div>
                {loading && "Loading!"}
            </div>
            <AddTodo handleAdd={handleAdd}/>
            <div>
                <button onClick={()=>setTitleSortBy(prev=>prev==="ASC"?"DESC":"ASC")}>
                   TITLE: {titleSortBy==="ASC"? "Make Descending":"Make Ascending"}
                </button>
            </div>
            <h3>Pending</h3>
            {
            todos.filter(item=>!item.status).map(item=>
            <TodoList 
            key={item.id}
            title={item.title}
            status={item.status}
            id={item.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            />)
            }

            <h3>Completed</h3>

            {
            todos.filter(item=>item.status).map(item=>
            <TodoList 
            key={item.id}
            title={item.title}
            status={item.status}
            id={item.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            />)
            }

        </div>
        )
}
export default Todo;