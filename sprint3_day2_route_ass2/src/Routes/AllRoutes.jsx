import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Mens from '../Pages/Mens'
import Womens from '../Pages/Womens'
import Login from '../Pages/Login'
import AboutUs from '../Pages/AboutUs'
import FAQ from "../Pages/FAQ";
import ContactUs from "../Pages/ContactUs";
import Jwellery from "../Pages/Jwellery"
import PageNotFound from "../Pages/PageNotFound"
import SingleProduct from "../Pages/SingleProduct"
function AllRoutes(){
    return(
        <Routes>
            <Route path ="/" element={<Home/>}></Route>
            <Route path ="/mens" element={<Mens/>}></Route>
            <Route path ="/womens" element={<Womens/>}></Route>
            <Route path ="/login" element={<Login/>}></Route>
            <Route path ="/about" element={<AboutUs/>}></Route>
            <Route path ="/faq" element={<FAQ/>}></Route>
            <Route path ="/contact" element={<ContactUs/>}></Route>
            <Route path="/jewelery" element={<Jwellery />}></Route>
            <Route path='/products/:id' element={<SingleProduct/>}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    )
}
export default AllRoutes;