import React from "react"
import Banner from "../Components/Banner";
import FetchData from "../Components/FetchData";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
function Womens(){
    const {isAuth,toggleAuth}=React.useContext(AuthContext)
   
        if(!isAuth){
        return <Navigate to ="/login"/>
        }

    return (
        <div>
          <Banner />
      <h1>Womens</h1>
      <FetchData category="/category/women's clothing" />
        </div>
    )

}

export default Womens;