import React from 'react'
import "./Footer.css"
import footer_logo from '../../assets/logo.svg'
import user_iccon from '../../assets/user_icon.svg';


function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I am a skilled Frontend Developer from Bhopal, Madhya Pradesh, with extensive knowledge and experience in web development.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_iccon} alt="" />
                    <input type="email" placeholder="Enter your email" />
                    
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2024 Simran Singh. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of services</p>
                <p>Privacy Policy</p>
                <p>Connect with Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer