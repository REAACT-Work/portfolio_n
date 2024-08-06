import React from 'react'
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import loaction_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "99d63e4c-d7d7-4ae9-84da-91a0c7b30046");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'am currently available to take projects,so feel free to do that.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>ssiimmmmii@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={loaction_icon} alt="" /><p>Madhya Pradesh,India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" name="name" placeholder='Enter your name' id="" required />
                <label htmlFor="">Email</label>
                <input type="email" name="email" placeholder='Enter your email' id="" required />
                <label htmlFor="">Write your message here </label>
                <textarea name="message" id="" rows="8" placeholder='Type your message here...' required></textarea>
                <button className='contact-submit' type="submit">Submit now</button>

            </form>
        </div>
    </div>
  )
}

export default Contact