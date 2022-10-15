import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Users from "./Users"
import SingleUserPage from "./SingleUserPage"
import PrivateRoute from "../Components/PrivateRoute"
function AllRoutes()
{
 return(
    <Routes>

        {/* path->what is path
        element-which wlwment u want to show */}
        <Route path ="/" element={<Home/>}></Route>
        <Route path ="/about" element={<About/>}></Route>
        <Route path ="/contact" element={<Contact/>}></Route>
        <Route path ="/users" element={<PrivateRoute><Users/></PrivateRoute>}></Route>
        
        {/* if path is /user/anything */}
        <Route path ="/users/:user_id" 
        element={<PrivateRoute><SingleUserPage/></PrivateRoute>}></Route>
      </Routes>
 )

   
}
export default  AllRoutes