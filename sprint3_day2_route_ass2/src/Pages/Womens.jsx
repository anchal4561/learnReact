import React from "react"
import Banner from "../Components/Banner";
import FetchData from "../Components/FetchData";

function Womens(){

    return (
        <div>
          <Banner />
      <h1>Womens</h1>
      <FetchData category="/category/women's clothing" />
        </div>
    )

}

export default Womens;