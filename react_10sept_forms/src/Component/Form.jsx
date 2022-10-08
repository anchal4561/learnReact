import { useState } from "react";

const initialState={
    name:"",
    gender:"",
    role:"",
    maritalStatus:false
};

function Form(){
    const [formData,setFormData]=useState(initialState)
    const [users,setUsers]=useState([]);
    
    const handleChange=(e)=>{
        const {type,checked,value,name}=e.target;
        const inputValue=type==="checkbox"?checked:value;
        setFormData({...formData,[name]:inputValue})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        setUsers([...users,formData])
    }

    const {name,gender,role,maritalStatus}=formData;
    return(
        <div className="main">
            <form onSubmit={handleSubmit}>
                <h1>Forms</h1>
                <label> Name:  </label>
                    <input
                    name="name"
                    type="text"
                    value={name}
                    onChange={handleChange}
                    />
        <br/>
        <br/>
        <label>Gender:</label>
        <select name="gender" value={gender} onChange={handleChange}>
          <option>Gender</option>
          <option value="male">Male</option>  
          <option value="female">Female</option>  
        </select>
        <br/>
        <br/>

        <label>Role:</label>
        <select name="role" value={role} onChange={handleChange}>
          <option>Role</option>
          <option value="eng">Engineer</option>  
          <option value="doc">Doctor</option> 
          <option value="painter">Painter</option>   
        </select>
        <br/>
        <br/>
        <label>Marital Status :
        </label>
        <input
        type="checkbox"
        name="maritalStatus"
        checked={maritalStatus}
        onChange={handleChange}
        />

        <br/>
        <br/>
        <input type="submit"/>

            {users.map((user)=>{
                <li key={user.name}>
                    {user.name}
                    {user.role}
                </li>
            })}

        </form>
        </div>
    )

}
export default Form;