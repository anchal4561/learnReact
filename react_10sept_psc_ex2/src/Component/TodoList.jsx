import React  from "react";

export const TodoList=({title,status,handleDelete,handleToggle,id})=>{
    return(
        <div style={{
            display:"flex",
            gap:"1rem",
            justifyContent:"space-evenly"
        }}>
            <b>{title}</b> {status?"DONE":"NOT DONE"}
            <button onClick={()=>handleToggle(id,!status)}>Toggle Status</button>
            <button onClick={()=>handleDelete(id)}>DELETE</button>
       
        </div>
    )
}
