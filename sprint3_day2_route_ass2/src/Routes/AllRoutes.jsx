import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Mens from '../Pages/Mens'
import Womens from '../Pages/Womens'
import Kids from '../Pages/Kids'
import Login from '../Pages/Login'
import AboutUs from '../Pages/AboutUs'
import FAQ from "../Pages/FAQ";
import ContactUs from "../Pages/ContactUs";
function AllRoutes(){
    return(
        <Routes>
            <Route path ="/" element={<Home/>}></Route>
            <Route path ="/mens" element={<Mens/>}></Route>
            <Route path ="/womens" element={<Womens/>}></Route>
            <Route path ="/kids" element={<Kids/>}></Route>
            <Route path ="/login" element={<Login/>}></Route>
            <Route path ="/about" element={<AboutUs/>}></Route>
            <Route path ="/faq" element={<FAQ/>}></Route>
            <Route path ="/contact" element={<ContactUs/>}></Route>
        </Routes>
    )
}
export default AllRoutes;