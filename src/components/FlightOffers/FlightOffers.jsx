import React from 'react'
import './FlightOffers.css'


const fourth = require('../../assets/img/MilitaryFlights.jpg')
const first = require('../../assets/img/FlightsforStudent.jpg')
const second = require('../../assets/img/SeniorTravelFlight.jpg')
const third = require('../../assets/img/MilitaryFlights.jpg')

const FlightOffers = () => {
  return (
    <div className="App">
    <header className='normal'>
      <h1>Travel By Theme</h1>
      <p>For Categorization, utilize Last Minute Flights, Flights for Seniors, Military Flights, Flights for Students</p>
    </header>
    <main>
      <div className="card-container">
        <div className="card">
          <div className="card-header">
            <div className="best-offer">
              <span>Best Offers</span>
            </div>
            <h2>Flights under $199</h2>
          </div>
          <div className="card-body">
            <p>Are you in search of flights under $199? Cheaptravelgroup is here to help.</p>
            <p>Cheaptravelgroup.com</p>
            <p>Fares starting from</p>
            <p className="price">$190.44</p>
            <div className="rating">
              <span>Rating:</span>
              <span>✩✩✩✩✩</span>
            </div>
          </div>
          <img src={first} alt="Flight under $199" />
        </div>
        <div className="card">
          <div className="card-header">
            <div className="best-offer">
              <span>Best Offers</span>
            </div>
            <h2>Senior Travel Flight</h2>
          </div>
          <div className="card-body">
            <p>With Cheaptravelgroup Senior travel is easy on the pockets!.</p>
            <p>Cheaptravelgroup.com</p>
            <p>Fares starting from</p>
            <p className="price">$120.50</p>
            <div className="rating">
              <span>Rating:</span>
              <span>✩✩✩✩✩</span>
            </div>
          </div>
          <img src={second} alt="Senior Travel Flight" />
        </div>
        <div className="card">
          <div className="card-header">
            <div className="best-offer">
              <span>Best Offers</span>
            </div>
            <h2>Flights for Student</h2>
          </div>
          <div className="card-body">
            <p>The long school year is over, and it is time to break free and see the world. Cheaptravelgroup.com</p>
            <p>Fares starting from</p>
            <p className="price">$196.36</p>
            <div className="rating">
              <span>Rating:</span>
              <span>✩✩✩✩✩</span>
            </div>
          </div>
          <img src={first} alt="Flights for Student" />
        </div>
        <div className="card">
          <div className="card-header">
            <div className="best-offer">
              <span>Best Offers</span>
            </div>
            <h2>Military Flights</h2>
          </div>
          <div className="card-body">
            <p>Looking for cheap airline tickets for military personnel?. Cheaptravelgroup.com</p>
            <p>Fares starting from</p>
            <p className="price">$111.00</p>
            <div className="rating">
              <span>Rating:</span>
              <span>✩✩✩✩✩</span>
            </div>
          </div>
          <img src={third} alt="Military Flights" />
        </div>
      </div>
    </main>
  </div>
  )
}

export default FlightOffers