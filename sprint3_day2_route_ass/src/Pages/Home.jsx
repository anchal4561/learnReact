import React, { useContext } from "react"
import {AuthContext} from "../Context/AuthContext"
function Home(){
    const {isAuth,toggleAuth}=useContext(AuthContext)
    return (
        <div>
        <h1>Home</h1>
        <button onClick={toggleAuth}>{!isAuth ? "Login" : "Logout"}</button>
      </div>
    )
}
export default Home;