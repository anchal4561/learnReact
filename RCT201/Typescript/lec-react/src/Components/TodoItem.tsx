import React, { ReactNode } from 'react'
type TodoItemProps={
  id:number;
  content:string;
  status:boolean;
  toggleStatus:Function;
  completedIcon:JSX.Element;
  inCompletedIcon:ReactNode;
  deleteIcon:any;
  children:ReactNode;
}
const TodoItem = ({
  id,children,status,toggleStatus,
completedIcon,
inCompletedIcon,deleteIcon
}:TodoItemProps) => {
  return (
    <div>
      <div>
      <div onClick={()=>toggleStatus(id)}>
        <span>{children}</span>
        ---

        <span>{status? completedIcon:inCompletedIcon}</span>
              {deleteIcon}
      </div>
      
    </div>
    </div>
  )
}

export default TodoItem