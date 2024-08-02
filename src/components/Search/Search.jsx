import React, { useState } from "react";
import "./Search.css";



const Search = () => {
  
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [numInfants, setNumInfants] = useState(0);
  const [showPassengerOption, setShowPassengerOption] = useState(false);
  const [ setLoading] = useState(false);
  const [leavingFrom, setLeavingFrom] = useState("");
  const [goingTo, setGoingTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returningDate, setReturningDate] = useState("");
  const [flightClass, setFlightClass] = useState("Economy");
  const [flightTripp, setFlightTripp] = useState("OneWay");
  const [tripType, setTripType] = useState('round-trip');

  const handleToggleShowPassenger = () => {
    setShowPassengerOption(!showPassengerOption);
  };

  const handlePassengerChange = (type, increment) => {
    switch (type) {
      case "adults":
        setNumAdults((prevNum) => Math.max(prevNum + increment, 0));
        break;
      case "children":
        setNumChildren((prevNum) => Math.max(prevNum + increment, 0));
        break;
      case "infants":
        setNumInfants((prevNum) => Math.max(prevNum + increment, 0));
        break;
      default:
        break;
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!leavingFrom || !goingTo || !departureDate || (flightTripp === "RoundTrip" && !returningDate)) {
      alert("Please fill in all required fields.");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Search functionality is not implemented in this demo.");
    }, 2000);
  };

  const preventDefaultAction = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-bar">
      <div className="trip-options">
        <button
          className={`trip-option ${tripType === 'round-trip' ? 'active' : ''}`}
          onClick={() => setTripType('round-trip')}
        >
          Round trip
        </button>
        <button
          className={`trip-option ${tripType === 'one-way' ? 'active' : ''}`}
          onClick={() => setTripType('one-way')}
        >
          One way
        </button>
        <button
          className={`trip-option ${tripType === 'multi-city' ? 'active' : ''}`}
          onClick={() => setTripType('multi-city')}
        >
          Multi-city
        </button>
        <div className="dropdown">
          <button className="dropdown-button">
            Economy
          </button>
          <div className="dropdown-content">
            <a href="#">Economy</a>
            <a href="#">Business</a>
            <a href="#">First</a>
          </div>
        </div>
      </div>
      <div className="search-fields">
        <div className="field">
          <label>Leaving from</label>
          <input type="text" placeholder="Add city, airport" defaultValue="Delhi, DEL - Indira Gandhi Int..." />
          <button className="swap-button">&#8644;</button>
        </div>
        <div className="field">
          <label>Going to</label>
          <input type="text" placeholder="Add city, airport" />
        </div>
        <div className="field">
          <label>Departing</label>
          <input type="date" />
        </div>
        <div className="field">
          <label>Returning</label>
          <input type="date" />
        </div>
        <div className="field">
          <label>Passenger(s)</label>
          <input type="text" placeholder="1 Adult" />
        </div>
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default Search;