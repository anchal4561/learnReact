import {useReducer, useState} from "react";

import reducer from "./counterReducer"
import {incrementAction,decrementByValue,decrementAction,resetAction, incrementByValue} from "./counterAction"

//reducer-R
//action -A
//dispatch that action -D

function Counter()
{
    const [state,dispatch]=useReducer(reducer,{
        count:0,isAuth:true,todos:[]
    })
    const [inputValue,setInputValue] =useState("")

    return(
        <>
        <h1>Count:{state.count}</h1>
        <input type="number" value={inputValue} 
        onChange={(e)=>setInputValue(Number(e.target.value))}/>
        <button onClick={()=>dispatch(incrementAction)}>Increment</button>
        <button onClick={()=>dispatch(decrementAction)}>Decrement</button>
        <button onClick={()=>dispatch(resetAction)}>Reset</button>
        <button onClick={()=>dispatch(incrementByValue(inputValue))}>Increment By Value</button>
        <button onClick={()=>dispatch(decrementByValue(inputValue))}>Decrement By Value</button>

        </>
    )
}
export default Counter;