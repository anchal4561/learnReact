import React from "react"
import {Link} from "react-router-dom"
import './Footer.css' 
function Footer(){
    return (
        <div>
            <div id="footer-container">
            <div id ="footer">
                <div className="col">
                <Link to="/about" style={{ textDecoration: "none" }}>
              <p className="content">About Us</p>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <p className="content">Contact Us</p>
            </Link>
            <Link to="faq" style={{textDecoration:"none"}}>
              <p className="content">FAQ</p>
            </Link>
                </div>
            <div className="col">
            <p className="lead">LEGAL</p>
            <p className="content">Terms of Service</p>
            <p className="content">Privacy</p>
            <p className="content">Pricing</p>
          </div>
          <div id="copy">
          <p>
            Copyright © Mooncascade OÜ. All Rights Reserved.
             E-mail: shopy.com
          </p>
        </div>
            </div>
            </div>
        </div>
    )

}
export default Footer;