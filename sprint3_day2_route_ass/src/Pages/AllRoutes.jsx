import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import AllProducts from "./AllProducts"
import SingleProduct from "./SingleProduct"
import PageNotFound from "./NotFoundPage"
function AllRoutes(){

    return (
        <Routes>
            <Route path ="/" element={<Home/>}></Route>
            <Route  path ="/allproducts" element={<AllProducts/>}></Route>
            <Route  path ="/products/:id" element={<SingleProduct/>}></Route>
            <Route path="*" element={<PageNotFound/>}>
            </Route>
        </Routes>
    )
}

export default AllRoutes;