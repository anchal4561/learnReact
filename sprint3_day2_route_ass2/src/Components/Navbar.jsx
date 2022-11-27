import React  from "react";
import styles from "./Navbar.module.css"
import {NavLink,Link,useNavigate} from "react-router-dom"
function Navbar(){

    const links=[
        { path :"/" ,title:"Home"},
        { path:"/mens" ,title:"Mens"},
        {path :"/womens",title:"Womens" },
        {path :"/jewelery",title:"Jwelery" }
    ]


const navigate=useNavigate();
return (
       <div style={{display:"flex",
       marginBottom:"70px",
            alignItems:"center",
            justifyContent:"space-around",
            width:"80%",
            margin:"auto",
            }}>
        {links.map((link)=>(
            <NavLink className={({isActive})=>{
                return isActive? styles.active :styles.default
            }} key={link.path} to={link.path}>
                {link.title}
            </NavLink>
        ))}
         <Link to="/shoppingcart">
        <img
          style={{ width: "25px" }}
          src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
          alt=""
        />
      </Link>
        <button onClick={()=>navigate("/login")}>Login</button> 
        </div>
    )
}
export default Navbar;
