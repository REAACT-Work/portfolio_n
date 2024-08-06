import React from 'react'
import "./Hero.css";
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Simran Singh ,</span>Frontend Developer based in India</h1>
        <p>I am a skilled Frontend Developer from Bhopal, Madhya Pradesh, with extensive knowledge and experience in web development.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero