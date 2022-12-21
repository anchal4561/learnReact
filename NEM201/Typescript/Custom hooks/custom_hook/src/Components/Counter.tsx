import React from "react"
import { useMyReducer } from "../hooks/useMyReducer";
enum CountType
{
INC="inc",
DEC="dec"
}

type State={
    count:number;

}

type Action={
    type:CountType;
    payload:number;
}

const reducer=(state:State,action:Action)=>{
    switch (action.type){
        case CountType.INC:{
            return {
                ...state,
                count:state.count+action.payload
            }
 
        }

        case CountType.DEC:{
            return {
                ...state,
                count:state.count-action.payload
            }
        }
        default:{
            return state;
        }
    }
}


const Counter=()=>{
    const [state,dispatch]=useMyReducer<State,Action>(reducer,{count:0})
    return (
    <div>Counter:{state.count}
        <div>
            <button onClick={()=>dispatch({type:CountType.DEC,payload:1})}>-</button>
            <button onClick={()=>dispatch({type:CountType.INC,payload:1})}>+</button>
        </div>
    </div>
    )
}

export default Counter;