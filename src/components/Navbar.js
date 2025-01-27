import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobile(false); // Close mobile menu when switching to a larger screen
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
     <nav className="navbar">
           <div className="navbar-container">
               <h3 className="logo">National Hardware</h3>
               <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
                   <li> 
                       <Link to="/" className="nav-link active">Home AB CHANGES</Link>
                   </li>
                   <li>
                       <Link to="/usermaster" className="nav-link">User Master AK changes</Link>
                   </li>
                   <li>
                       <Link to="/productcatagorymaster" className="nav-link">Product Master</Link>
                   </li>
                   <li>                    
                       <Link to="/itemmaster" className="nav-link">Item Master</Link>
                   </li>
               </ul>
               <div
                   className="mobile-menu-icon"
                   onClick={() => setIsMobile(!isMobile)}
               >
                   <div className={`hamburger ${isMobile ? "active" : ""}`}>
                       <span></span>
                       <span></span>
                       <span></span>
                   </div>
               </div>
           </div>
       </nav>
  )
}

export default Navbar
