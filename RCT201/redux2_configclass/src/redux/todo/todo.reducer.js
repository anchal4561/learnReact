import { ADD_TODO,DELETE_TODO,GET_TODO,UPDATE_TODO } from "./todo.types";
let todos=localStorage.getItem("todos")

const initialState={
    todos:todos?JSON.parse(todos):[],
}
export const todoReducer=(state=initialState,{type,payload})=>{

    switch(type){

        case ADD_TODO:{
            return{
                ...state,
                todos:[...state.todos,payload]
            }
        }

        case GET_TODO:{
            localStorage.setItem("todos",JSON.stringify(payload))
            return{
                ...state,
                todos:payload
            }
        }


        case UPDATE_TODO:{
            const id=payload.id;
            const updateTodos=state.todos.map((todo)=>{
                if(todo.id===id){
                    return payload;
                }
                return todo
            })
            return{
                ...state,
                todos:updateTodos
            }
        }
        case DELETE_TODO:{
            const id=payload.id;
            const filterTodos=state.todos.filter((todo)=>todo.id!==id)
            return{
                ...state,
                todos:filterTodos
            }
        }
        default:{
            return state;
        }
    }
}