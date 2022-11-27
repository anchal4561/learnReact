import React from "react";
import { useContext } from "react";
import { AuthConext } from "../Context/AuthContext";

function Login(){
    const {isAuth,toggleAuth}=useContext(AuthConext)
    return (
        <div>
            <button onClick={toggleAuth}>{!isAuth?"Login":"Logout"}</button>
        </div>
    )
}
export default Login;