import {INC,DEC,MUL,DIV} from "./actionTypes"

const initialState={count:0,X:0}

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case INC:{
            return{ 
                ...state,
                count:state.count+action.payload
            }
        }
        case DEC:{
            return{ 
                ...state,
                count:state.count-action.payload
            }
        }

        case MUL:{
            return{ 
                ...state,
                count:state.count * action.payload
            }
        }
        case DIV:{
            return{ 
                ...state,
                count:state.count/action.payload
            }
        }
        default:{
            return state;
        }
    }
}