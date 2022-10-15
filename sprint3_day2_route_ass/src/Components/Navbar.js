import React from "react"
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <div style={{display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
        width:"80%",
        margin:"auto",
        }}>
            <Link to="/">Home</Link>
            <Link to="/allproducts">All Products</Link>
        </div>
        
    )
  

}
export default Navbar;