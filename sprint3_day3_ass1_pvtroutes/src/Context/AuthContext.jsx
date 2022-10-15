import React from  "react"
import {  createContext, useState } from "react"
export const AuthConext=createContext();

function AuthConextProvider({children}){
    const [isAuth,setIsAuth]=useState(false)

    const toggleAuth=()=>{
        setIsAuth(!isAuth)
    }
   
    return(
        <AuthConext.Provider value={{isAuth,toggleAuth}}>
            {children}
        </AuthConext.Provider>
    )


}
export default AuthConextProvider;