import React from "react"
import {useContext} from "react"
import {Navigate} from "react-router-dom"
import {AuthConext} from "../Context/AuthContext"
function PrivateRoute({children}){
    const {isAuth}=useContext(AuthConext)
    if(!isAuth){
        return <Navigate to ="/"/>
    }

    return children
}
export default PrivateRoute;