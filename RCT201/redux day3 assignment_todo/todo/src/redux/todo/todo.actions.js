import { ADD_TODO,DELETE_TODO,GET_TODO,UPDATE_TODO,GET_SINGLE_TODO } from "./todo.types";
import axios from "axios"

export const getTodos=()=>async (dispatch)=>{
    let response =await axios.get(`http://localhost:8080/todos/`)
    let data= await response.data;
    console.log(data)
    dispatch(
        {
            type:GET_TODO,
            payload:data
        }
    )
}

export const addTodo=(payload)=>async(dispatch)=>{
    let response=await axios.post("http://localhost:8080/todos",{id:Date.now(),...payload});
    dispatch({
            type:ADD_TODO,payload:{
                id:Date.now(),
                ...payload
            }       
    })
}

export const getSingleTodos=(id)=>async (dispatch)=>{
    let response=await axios.get(`http://localhost:8080/todos/${id}`)
    let data=await response.data;
    console.log(data)
    dispatch({
        type:GET_SINGLE_TODO,
        payload:data
    })
}

export const updateTodo=(payload)=>async(dispatch)=>{
    console.log(payload)
    let response=await axios.patch(`http:localhost:8080/todos/${payload.id}`,
    {status:payload.status})
    dispatch({type:UPDATE_TODO,payload})

}

export const deleteTodo=(id)=>async (dispatch)=>{
    let response=await axios.delete(`http:localhost:8080/todos/${id}`)

    dispatch({
        type:DELETE_TODO,
        payload:id
    })
}