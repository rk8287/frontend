import React from 'react'
import { MdFlightTakeoff, MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import './Contact.css'
import { useEffect } from 'react';

const Contact = () => {

   // Scroll to the top of the page when this component is rendered
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-container">
    <div className="contact-header">
      <h1>Contact us</h1>
      <p>Need help? We are here!</p>
    </div>
    <div className="contact-content">
      <div className="contact-form">
        <h2>We'd love to hear from you</h2>
        <p>Send us a message and we'll respond as soon as possible</p>
        <form>
          <div className="input-group">
            <div className="input-box">
              <MdFlightTakeoff className="input-icon" />
              <input type="text" placeholder="Your name" />
            </div>
            <div className="input-box">
              <MdEmail className="input-icon" />
              <input type="email" placeholder="Email address" />
            </div>
          </div>
          <div className="input-box">
            <MdPhone className="input-icon" />
            <input type="text" placeholder="Mobile Number" />
          </div>
          <div className="input-box">
            <MdFlightTakeoff className="input-icon" />
            <textarea placeholder="Write message" />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p><MdLocationOn className="info-icon" /> Address</p>
        <p>22 JERICHO TPKE STE 102 MINEOLA, NY 11501</p>
        <p><MdPhone className="info-icon" /> Toll Free</p>
        <p>Call Now: <a href="tel:+18007306311">+1-800-730-6311</a></p>
        <p><MdEmail className="info-icon"/> Email</p>
        <p><a href="mailto:info@cheapttravelgroup.com">info@timelesstravels.com</a></p>
      </div>
    </div>
  </div>
  )
}

export default Contact