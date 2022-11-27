import React from "react";

function TodoList({value,handleToggle,handleDelete}){
    return(
        <tr>
            <td>{value.title}</td>
            <td >
            <button style={{backgroundColor:"blue",color:"white"}}onClick={()=>handleToggle(value.id,value.status)}>
                {value.status ?"Completed":"Not Completed"}
                </button>
            </td>
            <td>
                <button style={{backgroundColor:"red"}} onClick={()=>handleDelete(value.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default TodoList;