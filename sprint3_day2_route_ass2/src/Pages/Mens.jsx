import React from "react"
import Banner from "../Components/Banner";
import FetchData from "../Components/FetchData";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
function Mens(){
    const {isAuth,toggleAuth}=React.useContext(AuthContext)
   
        if(!isAuth){
        return <Navigate to ="/login"/>
        }

    return (
        <div>
           <Banner />
      <h1>Mens</h1>
      <FetchData category="/category/men's clothing" />
        </div>
    )

}

export default Mens;