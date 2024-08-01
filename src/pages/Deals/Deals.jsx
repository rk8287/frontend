import React from 'react'
import './Deals.css'
const one = require('../../assets/img/travel.png')
const two = require('../../assets/img/travel-insurance.png')
const three = require('../../assets/img/call-center.png')

const Deals = () => {
  return (
    <header className="header-not">
      <div className="header-item-not">
        <img src={one} alt="Secure" />
        <div>
          <h3>Secure and Simple Booking</h3>
          <p>Your individual and financial information remains secure with us.</p>
        </div>
      </div>
      <div className="header-item-not">
        <img src={two} alt="Deals" />
        <div>
          <h3>Exclusive Flights Deals</h3>
          <p>Get to chosen selected deals accessible with budget and full-service airlines.</p>
        </div>
      </div>
      <div className="header-item-not">
        <img src={three} alt="Service" />
        <div>
          <h3>24/7 Customer Services</h3>
          <p>Call us anytime for any help. We don't go into hibernation.</p>
        </div>
      </div>
    </header>
  )
}

export default Deals
