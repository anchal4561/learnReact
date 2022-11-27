import { GET_SINGLE_TODO,GET_TODO,ADD_TODO,DELETE_TOOD,UPDATE_TODO } from "./todo.types";

let todos=localStorage.getItem("todos")
const initialState={
    todos:todos?JSON.parse(todos):[],
    single_todos:{}
}

export const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_TODO:{
            localStorage.setItem("todos",JSON.stringify(action.payload))
            return{
                ...state,
                todos:action.payload,
            }
        }
        case GET_SINGLE_TODO:{
            return{
                ...state,
                single_todos:action.payload
            }
        }
        case ADD_TODO:{
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }
        }

        case UPDATE_TODO:{
            const id=action.payload.id;
            const updateTodos=state.todos.map((todo)=>{
                if(todo.id===id){
                    return action.payload
                }
                return todo;
            })
            return{
                ...state,
                todos:updateTodos,
                single_todos:action.payload
            }
        }
        case DELETE_TOOD:{
            const id=action.payload;
            const filteredTodo=state.todos.filter((todo)=>todo.id !=id)
            return{
                ...state,
                todos:filteredTodo,
                single_todos:{}
            }
        }
        default:{
            return state;
        }
    }
}