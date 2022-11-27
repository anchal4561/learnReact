import axios from "axios";

export const  getTodos=()=>{
    return axios.get("http://localhost:3000/todos")
}

export const postTodos=(text)=>{
    return axios.post(`http://localhost:3000/todos`,
    {
        title:text,
        status:false
    }
    )
}

export const deleteTodos=(id)=>{
    return axios.delete(`http://localhost:3000/todos/${id}`)
}

export const toggleTodos=(id,status)=>{
    return axios.patch(`http://localhost:3000/todos/${id}`,{status:!status})
}