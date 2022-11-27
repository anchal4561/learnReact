
// to manage  actions that cab be performed from any place in single file
import {INC,DEC,ADD_TODO} from "./actionTypes"

export const increment=(payload=1)=>({type:INC,payload})
export const decrement=(payload=1)=>({type:DEC,payload})

export const addTodo=(payload)=>({type:ADD_TODO,payload})