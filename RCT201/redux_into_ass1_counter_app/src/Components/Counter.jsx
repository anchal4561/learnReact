import React from "react"
import { increment,decrement } from "../redux/actions"
// import { useState } from "react"
import {useSelector,useDispatch} from "react-redux"

const Counter = () => {

    const {count}=useSelector((store)=>store)
    const dispatch=useDispatch();
  return (
    <div>
      <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(decrement())} >DEC</button>
      <button onClick={()=>dispatch(increment())} >INC</button>
      </div>
    </div>
  )
}

export default Counter