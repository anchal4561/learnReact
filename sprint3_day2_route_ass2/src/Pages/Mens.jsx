import React from "react"
import Banner from "../Components/Banner";
import FetchData from "../Components/FetchData";
function Mens(){
   

    return (
        <div>
           <Banner />
      <h1>Mens</h1>
      <FetchData category="/category/men's clothing" />
        </div>
    )

}

export default Mens;