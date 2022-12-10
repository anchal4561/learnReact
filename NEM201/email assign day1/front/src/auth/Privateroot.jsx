import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './Authcontext'
import {Navigate} from "react-router-dom"
// import 
const Privateroot = ({children}) => {
const {isAuth}= useContext(AuthContext);

if(!isAuth){
    return <Navigate to="/login"/>
}

  return children;
}

export default Privateroot;