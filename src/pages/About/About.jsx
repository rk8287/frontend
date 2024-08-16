import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
const img1 = require('../../assets/img/pexels-wanderer-731217.jpg')


const About = () => {
  return (
   <>
 <div className="about-container">
      <div className="about-image">
        <img src={img1} alt="Plane" />
      </div>
      <div className="about-content">
        <h3 className="about-overview">Overview</h3>
        <h2 className="about-title">About Timless Travels</h2>
        <p className="about-description">
          Timeless Travels serves as your ultimate destination for accessing flight
          bargains, last-minute travel options, and an array of travel advice
          and engaging blogs that ignite your wanderlust. We consist of a
          dedicated team of enthusiastic and well-traveled individuals committed
          to simplifying the process of discovering and comparing the finest
          flight deals. Being one of the globe's leading flight comparison
          platforms, Planet Fares stands as your initial step in the journey of
          travel planning.
        </p>
       <Link to={"/contact"}> <button className="button" data-text="Awesome">
    <span className="actual-text">&nbsp;Contact&nbsp;</span>
    <span aria-hidden="true" className="hover-text">&nbsp;Contact&nbsp;</span>
</button></Link>
      </div>
      
    </div>
   </>
  )
}

export default About