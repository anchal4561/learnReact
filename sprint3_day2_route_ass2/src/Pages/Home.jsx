import React, { useContext } from "react"
import Banner from "../Components/Banner"
import FetchData from "../Components/FetchData";


function Home(){

    
    return(
        <div>
            <h3>Welcome Home</h3>
            <Banner/>

            <FetchData category=""/>
        </div>
    )
}
export default Home;