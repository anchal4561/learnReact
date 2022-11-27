import React from "react"
import {Link} from "react-router-dom"

const links=[
    {path:"/" ,title:"Home"},
    {path :"/login", title:"Login"},
    {path :"/dashboard",title:"Dashboard"}
]

const Navbar=()=>{
    return (
        <div style={{
            display:"flex",
            justifyContent:"space-around"
        }}>
            {links.map((link)=>(
            <Link key={link.path} to={link.path}>
                {link.title}
                </Link>
        ))
        }
        </div>
    )
}

export default Navbar;