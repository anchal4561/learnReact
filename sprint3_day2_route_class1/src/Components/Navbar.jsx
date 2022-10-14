import React  from "react";
// import {Link} from "react-router-dom"
import {NavLink} from "react-router-dom"
import styles from "./Navbar.module.css"
//map all the links instead of seperate link components
///NavLink for give some style-come from react-router-dom
const links=[
    {path:"/", title:"Home"},
    {path:"/about", title:"About"},
    {path:"/contact", title:"Contacts"},
    {path:"/users", title:"Users"}
]

function Navbar(){
    // const defaultStyle={
    //     TextDecoration:"none",
    //     color:"black"
    // }
    // const activeStyle={
    //     TextDecoration:"none",
    //     color:"red"
    // }
return (
      <div style={{display:"flex",
            alignItems:"center",
            justifyContent:"space-around",
            width:"80%",
            margin:"auto",
            }}>
        {links.map((link)=>(
            // <NavLink style={({isActive})=>{
            //     return isActive? activeStyle:defaultStyle;
            // }} key={link.path} to={link.path}>
            //     {link.title}
            // </NavLink>
            <NavLink className={({isActive})=>{
                return isActive? styles.active :styles.default
            }} key={link.path} to={link.path}>
                {link.title}
            </NavLink>
        ))}
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users">Users</Link> */}
      </div>
      )
}

export default Navbar;