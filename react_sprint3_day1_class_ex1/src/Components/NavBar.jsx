import React from "react"
import { useContext } from "react"
import styles from "./NavBar.module.css"
import { AuthContext } from "../Context/AuthContextProvider"
function NavBar(){
    const {isAuth, toggleAuth}=useContext(AuthContext)
    return (
        <div  className={styles.myNavBar}>
                <button onClick={toggleAuth}>
                    {isAuth==="true"?"Logout":"Login"}
                </button>
        </div>
    )

}
export default NavBar