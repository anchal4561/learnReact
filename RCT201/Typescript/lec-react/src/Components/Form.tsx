import React, {ChangeEvent,useState} from 'react'

type GENDER="Male"|"Female"|"Others";
type User={
    name:String;
    age:number;
    gender:GENDER;
}
const Form = () => {
    const [form,setForm]=useState<User>({
        name:"",
        age:0,
        gender:"Male"
    })

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    //    let {name,value}=e.target;
    let name:keyof User=e.target.name
    let value:keyof User=e.target.value
  
    setForm({
        ...form,
        [name]:value,
       })
    }


  return (
    <form>
        <input name="xyz" onChange={handleChange}/>
    </form>
  )
}

export default Form