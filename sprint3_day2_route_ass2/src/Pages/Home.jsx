import React, { useContext } from "react"
import Banner from "../Components/Banner"
import FetchData from "../Components/FetchData";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";



function Home(){
    const {isAuth,toggleAuth}=useContext(AuthContext)
   
        if(!isAuth){
        return <Navigate to ="/login"/>
        }

    
    return(
        <div>
            <h3>Welcome Home</h3>
            <Banner/>

            <FetchData category=""/>
        </div>
    )
}
export default Home;