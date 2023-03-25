import "./Navbar.css"
import{FaBars, FaTimes} from "react-icons/fa";
import React, { useState } from 'react'
import { Link } from "react-router-dom"


const Navbar = () => {
  
    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click);
  
    return (
    <div className="header">
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className= {click ? "nav-menu active": "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">about</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
                <FaTimes 
                    size={20} style= {{color: "#fff"}} 
                />
            ):(
                <FaBars 
                    size={20} style= {{color: "#fff"}} 
                />
            )}
        </div>
    </div>
  )
}

export default Navbar