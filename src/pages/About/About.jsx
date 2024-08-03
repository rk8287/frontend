import React from 'react'
import './About.css'
const img1 = require('../../assets/img/banner3.jpg')


const About = () => {
  return (
   <>

    <div className='about-main-container'>

<div className="about-main-section">

<div className="about-img-container">
  <img src={img1} alt="" />
  <div className="about-text-overlay">
  About Us
  </div>
  
</div>


<div className="about-des">
    
<div className="about-header">
  <h3>About</h3>
</div>

<hr />
  <p>At Timeless Travels, our mission is to empower people on their journeys—whether domestic, inbound, foreign, or outbound. Our focus is on making travel easy, enjoyable, and memorable. We offer a wide range of travel and tourism services and feature a user-friendly, creative online portal for convenient airline ticket booking.</p>
  <p>Life is a journey, and we're here to inspire you to make every stop along the way special. We help you imagine and plan your travels with a mix of timeless and innovative ideas, ensuring you receive rewarding experiences and valuable memories. Our Customer First Promise includes personalized assistance before, during, and after your trip.</p>
  <p>We're dedicated to delivering an exceptional flying experience by combining modern technology with customer loyalty. We offer a diverse range of fares to various destinations and pride ourselves on providing seamless service for both leisure and business travelers.</p>
  <p>Our extensive network allows us to offer both domestic and international flight tickets, and our strength lies in providing the right booking options with hassle-free service. As a result, we have built a loyal client base who rely on us for their travel needs.</p>
</div>

</div>
</div>
   </>
  )
}

export default About