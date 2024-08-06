import React from 'react'
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";

const About = () => {
  return (
    <div className='about'>
        <div id='about' className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am confident in my ability to deliver exceptional results as a motivated and detail-oriented graduate. My focus is on securing a challenging position as a Frontend Developer,  
                    </p>
                    <p>where I can apply and elevate my skills in web development, design, and user experience.Throughout my academic journey, I demonstrated my capabilities by successfully completing a pivotal project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1</h1>
                <p>YEAR OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>50+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>ACHIEVEMENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About