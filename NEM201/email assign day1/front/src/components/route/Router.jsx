import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from '../home/Home'
import Login from '../account/Login'
import Privateroot from '../../auth/Privateroot'
import VerifySignup from '../VerifySignup'
const Router = () => {
  return (
    
   <Routes>
    <Route path="/" element={<Privateroot>
        <Home/>
    </Privateroot>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/verifysignup' element={<VerifySignup/>}></Route>

    
   </Routes>
   
  )
}

export default Router