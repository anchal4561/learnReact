import {useState,useReducer} from "react"
import {reducer} from "./GitubReducer"
const initialValue={
    loading:"true",
    error:"",
    user:{}
}


function Github(){

    const [text,setText]=useState("")
    const [state,dispatch]=useReducer(reducer,initialValue)


    const getUser=async()=>{
        try{
            let res=await fetch(`https://api.github.com/users/${text}`);
            let data =await res.json()
            console.log(data)
            dispatch({type:"FETCH_SUCCESS",payload:data})
        }
        catch(error){
            dispatch({type:"FETCH_ERROR"})
        }   
     }

     return (
        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={getUser}>Search User</button>
            <h1>{state.user.login}</h1>
            <img src={state.user.avatar_url} alt ="img"/>
            <h1>{state.error}</h1>
        
        </div>
     )
}

export default Github