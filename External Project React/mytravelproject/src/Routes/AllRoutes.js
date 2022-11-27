import React from 'react'
import Home from './Home'
import About from './About'

import Service from './Service'
import Contact from './Contact'
import Signup from './Signup'
import Login from './Login'
import { Route,Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/service" element={<Service/>}></Route>

    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes