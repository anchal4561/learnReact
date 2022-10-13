import React from "react"
import { useContext,useEffect,useState } from "react"
import { AuthContext } from "../Context/AuthContextProvider"

const getToken =async ()=>{
     try {
        let data= await fetch(`https://reqres.in/api/login`,{
            method:"POST",
            heaers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                email: "eve.holt@reqres.in",
                password: "cityslicka",
            })
        })
        let res=await data.json();
        console.log(res);
        return res.token;
     }
     catch(err){
        console.log(err)
     }
}


function Display(){
    const [token,setToken]=useState("hahh");
    const {isAuth}=useContext(AuthContext)
    const getData=async ()=>{
        let new_token=await getToken();
        console.log(new_token);
        setToken(new_token)
    }
    
    useEffect(()=>{
        if(isAuth==="true"){
            getData();

        }
        else{
            setToken("")
        }
    },[isAuth])

    return (
        <div>
            <h1>{isAuth==="true"?"User is succesfully logged in":"User is Logged out"}</h1>
            <p>{isAuth==="true"?`Token is ${token}`:"Login Again"}</p>
        </div>
    )

}

export default Display;