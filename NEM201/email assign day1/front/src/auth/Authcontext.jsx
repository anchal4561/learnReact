import React,{useEffect} from 'react'
import { createContext, useState } from 'react';

export  const AuthContext =  createContext()
const AuthcontextProvider = ({children}) => {
const [isAuth,setisAuth] = useState(false)


const toggleAuth=()=>{
    setisAuth(!isAuth)
}

useEffect(() => {
  const token = JSON.parse(localStorage.getItem("token"))

  if (token) {
  
    setisAuth(true);
  }
}, []);


  return (
   <AuthContext.Provider value={{isAuth,toggleAuth}}>{children}</AuthContext.Provider>
  )
}

export default AuthcontextProvider;