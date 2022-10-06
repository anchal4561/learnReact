import React from "react";

function TodoItem({id,title,status,handleToggle,handleDelete}) {
  return (
    <div>
      <b>{title}</b>{status? "Completed":"Not Completed"}
      <button onClick={()=> handleToggle(id,!status)}>Toggle</button>
      <button onClick={()=> handleDelete(id)}>DELETE</button>
    </div>
  );
}

export default TodoItem;