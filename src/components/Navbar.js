import "./Navbar.css"
import{FaBars, FaTimes} from "react-icons/fa";
import React, { useState } from 'react'
import { Link } from "react-router-dom"


const Navbar = () => {
  
    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY>=1){
            setColor(true);
        }
        else{
            setColor(false);
        }
    }

    const handleHero = () => {
        setclick(!click);
        const workSection = document.querySelector('#main');
        workSection.scrollIntoView({ behavior: 'smooth' });
    };

    const handleWork = () => {
        setclick(!click);
        const workSection = document.querySelector('#work');
        workSection.scrollIntoView({ behavior: 'smooth' });
    };

    const handleAbout = () => {
        setclick(!click);
        const workSection = document.querySelector('#about');
        workSection.scrollIntoView({ behavior: 'smooth' });
    };

    const handleForm = () => {
        setclick(!click);
        const workSection = document.querySelector('#form');
        workSection.scrollIntoView({ behavior: 'smooth' });
    };

    window.addEventListener("scroll", changeColor);
  
    return (
    <div className={color? "header-bg":"header"}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className= {click ? "nav-menu active": "nav-menu"}>
            <li>
                <Link onClick={handleHero}>Home</Link>
            </li>
            <li>
                <Link onClick={handleAbout}>About</Link>
            </li>
            <li>
                <Link onClick={handleWork}>Projects</Link>
            </li>
            <li>
                <Link onClick={handleForm}>Contact</Link>
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