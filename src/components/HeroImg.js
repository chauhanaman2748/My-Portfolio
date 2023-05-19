import "./HeroImg.css"
import IntroImg from "../assets/hero.jpg"


const HeroImg = () => {
    const handleButtonClick = () => {
        const workSection = document.querySelector('#form');
        workSection.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div className="hero" id="main">
        <div className="mask">
            <img className="intro-img" src=
            {IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, I am a Software Developer</p>
            <h1>Application Developer</h1>
            <div>
                <a href='Resume.pdf' download='Aman Chauhan Resume.pdf'>
                    <button className="btn">
                        Resume
                    </button>
                </a>
                
                <button className="btn-light" onClick={handleButtonClick}>
                    {""}Hire Me{" "}
                </button>
            </div>
        </div>
    </div>
  )
}

export default HeroImg