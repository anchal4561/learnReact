import React, { ChangeEvent, FormEvent, useState } from 'react'
//synthetic events-> wrapper to html events

type TodoInputProps={
    onAdd:Function;
}

const TodoInput = (props:TodoInputProps) => {
    const {onAdd}=props;
    const [value,setValue]=useState<string>("")
   
    const handleOnChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
    }
    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        if(value.length>0){
            onAdd(value)
            setValue("")
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleOnChange}/>
        <button type="submit" onClick={()=>{}}>Add</button>
    </form>
  )
}

export default TodoInput