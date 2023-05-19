import "./Footer.css"
import React from 'react'
import{FaHome, FaPhone, FaMailBulk, FaGithub, FaGooglePlay, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    <p>Windsor, ON, Canada</p>
                </div>
                <div className="phone">
                    <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    <h4>+1 (226)961-6274</h4>
                </div>
                <div className="email">
                    <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    <h4>chauhan.aman3529@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>Profile Summary</h4>
                <p>As a software developer with expertise in MERN and Flutter applications, and a deep passion for creative problem-solving, I am confident in my ability to deliver high-quality software solutions that make a positive impact on people's lives.</p>
                <div className="social">
                    <a href="https://github.com/chauhanaman2748" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    </a>
                    <a href="https://www.linkedin.com/in/amanchauhan2748/" target="_blank" rel="noopener noreferrer">    
                        <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    </a>
                    <a href="https://developers.google.com/profile/u/chauhanaman2748" target="_blank" rel="noopener noreferrer">
                        <FaGooglePlay size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    </a>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Footer