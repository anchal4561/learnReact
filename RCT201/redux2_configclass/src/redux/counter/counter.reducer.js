
import {INC,DEC} from "./counter.types"
const initialState={count:0}

export const counterReducer=(state=initialState,{type})=>{

    switch(type){
        case INC:{
            return {
                ...state,
                count:state.count+1
            }
        }
        case DEC:{
            return {
                ...state,
                count:state.count-1
            }
        }
       default:{
        return state
       }
    }
}