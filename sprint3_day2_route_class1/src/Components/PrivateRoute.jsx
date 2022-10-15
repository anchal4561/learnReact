import React from "react"
import {Navigate} from "react-router-dom"
import {AuthContext} from "../Context/AuthContext"
function PrivateRoute({children}){
    const {isAuth} =React.useContext(AuthContext)
    if(!isAuth){
        return <Navigate to ="/"/>;

    }
    return children
    
}
export default PrivateRoute

//<PrivateRoute></PrivateRoute>