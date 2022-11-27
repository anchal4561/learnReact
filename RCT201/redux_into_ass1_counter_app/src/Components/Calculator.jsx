import React from "react"
import { increment,decrement,multiply,divide } from "../redux/actions"

import {useSelector,useDispatch} from "react-redux"
import { useState } from "react"

const Calculator = () => {
    const [value,setValue]=useState(0)
    const {X}=useSelector((store)=>store)
    const dispatch=useDispatch()

  return (

    <div>

    <input type="number" onChange={({target})=>setValue(+target.value)}/>
    <button onClick={()=> dispatch(increment(value))}>Increment by {X}</button>
    <button onClick={()=> dispatch(decrement(value))}>Decrement by {X}</button>
    <button onClick={()=> dispatch(multiply(value))}>Multiply by {X}</button>
    <button onClick={()=> dispatch(divide(value))}>Divide by X</button>
    </div>
  )
}

export default Calculator
