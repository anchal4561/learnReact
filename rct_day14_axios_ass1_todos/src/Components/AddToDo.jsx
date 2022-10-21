import React from "react"
import { useState } from "react"

function AddToDo({handleAddTodo}){
    const [text,setText]=useState("")

    return(
        <div>
            <input type="text"
             value={text}
             onChange={(e)=>setText(e.target.value)}/>
             <button onClick={()=>handleAddTodo(text)}>Add Todo</button>
        </div>
    )
}

export default AddToDo;