
import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import Pagination from "./Pagination";
import { TodoList } from "./TodoList";

const getTodos=(args={})=>{
    const {
    titleSortBy="ASC",
    page=1
    }=args;
   return  fetch(`http://localhost:3000/tasks?_sort=title&_order=${titleSortBy}&_page=${page}&_limit=3`).then(res=>res.json())
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
    const [page,setPage]=useState(1)
    useEffect(()=>{
        handleGetTodos();   
    },[titleSortBy,page])

    const handleGetTodos=()=>{
        setLoading(true)
        return getTodos({titleSortBy,page})
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
            <div>
                <select>
                    <option>All</option>
                    <option>Pending</option>
                    <option>Done</option>
                </select>
            </div>
            <h3>PENDING</h3>
            {
            todos.map(item=>
            <TodoList 
            key={item.id}
            title={item.title}
            status={item.status}
            id={item.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            />)
            }

            <div>
                <button disabled={page===1} 
                onClick={()=>setPage(prev=>prev-1)}>PREV</button>
                <button>{page}</button>
                <button
                 onClick={()=>setPage(prev=>prev+1)}>NEXT</button>
            </div>
            <Pagination total={10} current={page}
             onChange={(value)=>setPage(value)}/>

        </div>
        )
}
export default Todo;