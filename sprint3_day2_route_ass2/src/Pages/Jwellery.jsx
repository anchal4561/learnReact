import React from "react"
import Banner from "../Components/Banner"
import FetchData from "../Components/FetchData"
function Jwellery(){

     return(
        <div>
            <Banner/>
            <h1>Jwellery</h1>
            <FetchData category="/category/jewelery"/>
        </div>
    )
}
export default Jwellery