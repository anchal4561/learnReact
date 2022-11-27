import {INC,DEC,ADD_TODO} from "./actionTypes"

// to have all state mmgmt in one function

//giving initial state and it should be object
const initialState={count:0, todos:[]}

export const reducer=(state=initialState,action)=>{
 
    switch(action.type){
        case INC:{
            return{
                ...state,
                count:state.count+action.payload,
            } 
        }
        case DEC:{
            return{
                ...state,
                count:state.count-action.payload,
            } 
        }
        case ADD_TODO:{
            return {
                ...state,
                todos:[...state.todos,action.payload]
            }
        }
        default:
            {
               return  state
            }
    }
}