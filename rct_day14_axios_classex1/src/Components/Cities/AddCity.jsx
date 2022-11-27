import { useState } from "react";
function AddCity({onAddCity}){
    const [formState,setFormState]=useState({
        name:"",
        population:"",
        country:""
    })

    const handleChange=(e)=>{
        const {name,value,type}=e.target
        const val=type==="number"?Number(value):value;
        setFormState({
            ...formState,
            [name]:val
        })
    }

    const handleSubmit=(e)=>{
         e.preventDefault();
        onAddCity(formState)
    }

    return(
        <form onSubmit={handleSubmit}>
                <div>
                <input type="text"
                name="name" 
                 onChange={handleChange}
                 value={formState.name}
                 placeholder="Name"/>

                </div>
                <div>
                <input
                name="population" type="number"
                onChange={handleChange}
                 placeholder="Population" 
                 value={formState.population}/>
                </div>
                <div>
                <input
                name="country" type="text"
                onChange={handleChange}
                 placeholder="Country"
                  value={formState.country}/>
                </div>
                <input type="submit" value="Sumbit Form"/>
             
        </form>
        
    )
}

export default AddCity