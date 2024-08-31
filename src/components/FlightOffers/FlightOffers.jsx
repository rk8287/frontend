import React from "react";
import "./FlightOffers.css";

const FlightOffers = () => {
  return (
    <div className="flight-offers">
      <header className="header">
        <h1>Travel By Theme</h1>
        <p>
          For Categorization, utilize Last Minute Flights, Flights for Seniors,
          Military Flights, Flights for Students
        </p>
      </header>
      <div className="offers-grid">
        <div className="offer-card">
          <div className="offer-image">
            <img src={require("../../assets/img/pexels-daniel-1547739.jpg")} alt="Flights under $199" />
            <div className="offer-tag">Best Offers</div>
          </div>
          <div className="offer-content">
            <h2>Flights under $199</h2>
            <p>Are you in search of flights under $199? TimlessTravel is here to help.</p>
            <p className="price">Fares starting from <strong>$190.44</strong></p>
            <p className="rating">Rating: <span>✩✩✩✩✩</span></p>
          </div>
        </div>

        <div className="offer-card">
          <div className="offer-image">
            <img src={require("../../assets/img/SeniorTravelFlight.jpg")} alt="Senior Travel Flight" />
            <div className="offer-tag">Best Offers</div>
          </div>
          <div className="offer-content">
            <h2>Senior Travel Flight</h2>
            <p>With TimlessTravel Senior travel is easy on the pockets!</p>
            <p className="price">Fares starting from <strong>$120.50</strong></p>
            <p className="rating">Rating: <span>✩✩✩✩✩</span></p>
          </div>
        </div>

        <div className="offer-card">
          <div className="offer-image">
            <img src={require("../../assets/img/FlightsforStudent.jpg")} alt="Flights for Student" />
            <div className="offer-tag">Best Offers</div>
          </div>
          <div className="offer-content">
            <h2>Flights for Student</h2>
            <p>The long school year is over, and it is time to break free and see the world.</p>
            <p className="price">Fares starting from <strong>$196.36</strong></p>
            <p className="rating">Rating: <span>✩✩✩✩✩</span></p>
          </div>
        </div>

        <div className="offer-card">
          <div className="offer-image">
            <img src={require("../../assets/img/MilitaryFlights.jpg")} alt="Military Flights" />
            <div className="offer-tag">Best Offers</div>
          </div>
          <div className="offer-content">
            <h2>Military Flights</h2>
            <p>Looking for cheap airline tickets for military personnel?</p>
            <p className="price">Fares starting from <strong>$111.00</strong></p>
            <p className="rating">Rating: <span>✩✩✩✩✩</span></p>
          </div>
        </div>

        <div className="offer-card">
          <div className="offer-image">
            <img src={require("../../assets/img/pexels-olly-3769138.jpg")} alt="Senior Travel Flight" />
            <div className="offer-tag">Best Offers</div>
          </div>
          <div className="offer-content">
            <h2>Fastest Flight</h2>
            <p>With TimlessTravel Senior travel is easy on the pockets!</p>
            <p className="price">Fares starting from <strong>$120.50</strong></p>
            <p className="rating">Rating: <span>✩✩✩✩✩</span></p>
          </div>
        </div>

        <div className="offer-card">
          <div className="offer-image">
            <img src={require("../../assets/img/pexels-imjimmyqian-1710482.jpg")} alt="Senior Travel Flight" />
            <div className="offer-tag">Best Offers</div>
          </div>
          <div className="offer-content">
            <h2>Chepest Flight</h2>
            <p>With TimlessTravel Senior travel is easy on the pockets!</p>
            <p className="price">Fares starting from <strong>$120.50</strong></p>
            <p className="rating">Rating: <span>✩✩✩✩✩</span></p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default FlightOffers;
