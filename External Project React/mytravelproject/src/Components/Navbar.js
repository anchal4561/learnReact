import "./NavbarStyle.css";
import { Component, useState } from "react";
import { Menuitems } from "./MenuItem";
import { Link } from "react-router-dom";

import React from 'react'

const Navbar = () => {
    const[activeLink,setActiveLink]=useState("Home")
    const [clicked,setClicked]=useState(false)
    // state = {
    //     clicked: false,
    //     active: "Home",
    //   };
      const handleClick = () => {
        setClicked(!clicked );
      };
      console.log(activeLink)
  return (
    <nav className="NavbarItems">
    <h1 className="navbar-logo">Travelzone</h1>
    <div className="menu-icons" onClick={handleClick}>
      <i
        className={clicked ? "fas fa-times" : "fas fa-bars"}
      ></i>
    </div>
    <ul className={clicked ? "nav-menu active" : "nav-menu"}>

      <li  onClick={()=>{ setActiveLink("Home")}}>

        <Link
         className={activeLink==="Home" ? "activeLink" : "nav-links"} to="/">
          <i className="fa-solid fa-house-user"></i>Home
        </Link>
      </li>
      
      <li onClick={()=>setActiveLink("About")}>
        <Link 
         className={activeLink==="About" ? "activeLink" : "nav-links"}
          to="/about"
        >
          <i className="fa-solid fa-circle-info"></i>About
        </Link>
      </li>
      <li >
        <Link onClick={()=> setActiveLink("Contact")}
         className={activeLink==="Contact" ? "activeLink" : "nav-links"}
          to="/contact"
        >
          <i className="fa-solid fa-address-book"></i>Contact
        </Link>
      </li>
      <li>
        <Link  onClick={()=> setActiveLink("Service")}
         className={activeLink==="Service" ? "activeLink" : "nav-links"}
          to="/service"
        >
          <i className="fa-solid fa-briefcase"></i>Service
        </Link>
      </li>
      {/* {Menuitems.map((item,index)=>(

                    <li key={index} onClick={handleActiveLink}>
                    <Link className={state.active?"active":item.cName}
                    to={item.url} >
                    <i className={item.icon}></i>{item.title}
                    </Link>
                    </li>
                ))} */}
      <Link to="/signup">
        <button>Sign up</button>
      </Link>
    </ul>
  </nav>
  )
}

export default Navbar
