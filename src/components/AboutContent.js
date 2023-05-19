import { Link } from "react-router-dom";
import "./AboutContent.css"
import React from 'react'
import R1 from "../assets/FR.png"
import R2 from "../assets/QA.jpg"


const AboutContent = () => {
    const handleButtonClick = () => {
        const workSection = document.querySelector('#form');
        workSection.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div className="about" id="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>
                I am a tech enthusiast with a passion for Flutter, MERN stack development, Quality assurance, and data analysis. With proficiency in languages such as Dart, C, Java, HTML, and CSS, I am skilled in web frameworks like React, Express, and Node. My experience in app development for Android and iOS using Flutter and databases like MySQL and MongoDB make me well-rounded. I am familiar with Agile and Scrum methodologies and tools such as GIT, JIRA, MS Excel, Docker, Jenkins, Selenium, PowerBI, and Tablue. Currently pursuing a Master's in Applied Computing, I am open to 4-8 months of internships from September 2023.
            </p>
            <div className="resume">
                <div className="content">
                    <div className="about_edu">
                    <h3>Education</h3>
                    <li>Master of Applied Computing, University of Windsor</li>
                        <li>Bachelors of Technology in Computer Science, Sharda University</li>
                    </div>
                    <div className="about_">
                    <h3>Experience</h3>
                        <li>Software Development Intern, National Mission for Clean Ganga, Delhi, India</li>
                        <li>Information Technology Intern, Radnik Exports, Noida, India</li>
                    </div>
                </div>
            </div>
            <Link onClick={handleButtonClick} className="butn">
                <button className="btn">
                    Contact
                </button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={R1}
                    className="img" alt=""/>
                </div>  
                <div className="img-stack bottom">
                    <img src={R2}
                    className="img" alt=""/>
                </div>    
            </div>
            <div className="about_skill">
                <h3>Skills</h3>
                <li>Languages: Dart, C, Java, HTML, CSS</li>
                <li>Web Frameworks: React, Express, Node</li>
                <li>App Development: Android and iOS (Flutter)</li>
                <li>Databases: MySQL, MongoDB</li>
                <li>Development Tools: Android Studio, VS-Code</li>
                <li>Scripting Languages: Bash, JavaScript, Python, PHP</li>
                <li>Methodologies: Scrum, Agile</li>
                <li>Operating Systems: Linux (Ubuntu, Debian), Windows (7,8,8.1,10)</li>
                <li>Other Tools: GIT, JIRA, MS Excel, Docker, Jenkins</li>
                <li>Deployment Platform: AWS EC-2, Heroku, Render, Play Store</li>
            </div>
        </div>
    </div>
  )
}



export default AboutContent;