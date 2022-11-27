import { ADD_TODO,DELETE_TODO,GET_TODO,UPDATE_TODO } from "./todo.types";
import axios from "axios"
export const addTodo=(payload)=>({
    type:ADD_TODO,
    payload:{
      id:Date.now(),
    ...payload,
}})

export const getTodos=()=>async (dispatch)=>{
   let res=await axios.get("http://localhost:8080/todos")
    let data=await res.data;
    dispatch( {
        type:GET_TODO,
        payload:data,
    })
}

export const updateTodo=(payload)=>({type:UPDATE_TODO,payload})
export const deleteTodo=(payload)=>({type:DELETE_TODO,payload})