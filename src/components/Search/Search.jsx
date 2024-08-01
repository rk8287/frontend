import React, { useState } from "react";
import "./Search.css";
import originI from "../../assets/img/origin.png";
import departureI from "../../assets/img/departure.png";
import swap from "../../assets/img/cross.png";
import OriginTop from "../../assets/img/orginn.png";


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
    <div>
      <div className="topSe">
        <div className="topsee">
          <img src={OriginTop} alt="" />
        </div>
        <div className="topsee">
          <h3>Flights</h3>
        </div>
      </div>
      <div className="search-bar">
        <select className="trip-type" value={flightTripp} onChange={(e) => setFlightTripp(e.target.value)}>
          <option value="RoundTrip">Round Trip</option>
          <option value="OneWay">One Way</option>
          <option value="Return">Return</option>
        </select>

        <option onClick={handleToggleShowPassenger} value={numAdults + numChildren + numInfants}>
          Passenger {numAdults + numChildren + numInfants}
        </option>

        {showPassengerOption && (
          <div className="passenger-optionss">
            <div className="passenger-type">
              <label>Adults:</label>
              <div className="addOrSubBtn">
                <button onClick={(e) => { preventDefaultAction(e); handlePassengerChange("adults", -1); }}>-</button>
                <span>{numAdults}</span>
                <button onClick={(e) => { preventDefaultAction(e); handlePassengerChange("adults", 1); }}>+</button>
              </div>
            </div>
            <div className="passenger-type">
              <label>Children:</label>
              <div className="addOrSubBtn">
                <button onClick={(e) => { preventDefaultAction(e); handlePassengerChange("children", -1); }}>-</button>
                <span>{numChildren}</span>
                <button onClick={(e) => { preventDefaultAction(e); handlePassengerChange("children", 1); }}>+</button>
              </div>
            </div>
            <div className="passenger-type">
              <label>Infants:</label>
              <div className="addOrSubBtn">
                <button onClick={(e) => { preventDefaultAction(e); handlePassengerChange("infants", -1); }}>-</button>
                <span>{numInfants}</span>
                <button onClick={(e) => { preventDefaultAction(e); handlePassengerChange("infants", 1); }}>+</button>
              </div>
            </div>
          </div>
        )}

        <select className="class-type" value={flightClass} onChange={(e) => setFlightClass(e.target.value)}>
          <option value="Economy">Economy</option>
          <option value="PremiumEconomy">Premium Economy</option>
          <option value="Business">Business</option>
          <option value="First">First</option>
        </select>

        <div className="origin-d">
          <div className="input-icon">
            <img src={originI} alt="" />
            <input type="text" className="origin" placeholder="Enter Origin" value={leavingFrom} onChange={(e) => setLeavingFrom(e.target.value)} list="fromAirports" required />
            <datalist id="fromAirports">
             
            </datalist>
          </div>
          <div className="input-iconn">
            <img src={swap} alt="" />
          </div>
          <div className="input-icon">
            <img src={departureI} alt="" />
            <input type="text" className="destination" placeholder="Enter Destination" value={goingTo} onChange={(e) => setGoingTo(e.target.value)} list="toAirports" required />
            <datalist id="toAirports">
             
            </datalist>
          </div>
          <div className="input-icon">
            <input type="date" className="depart-date" placeholder="Depart" value={departureDate} required onChange={(e) => setDepartureDate(e.target.value)} />
          </div>
          <div className="input-icon">
            <input type="date" className="return-date" placeholder="Return" value={returningDate} onChange={(e) => setReturningDate(e.target.value)} />
          </div>
          <button className="search-btnn" type="submit" onClick={handleSearch}>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                </svg>
              </div>
            </div>
            <span>Search</span>
          </button>
        </div>
      
      </div>
    </div>
  );
};

export default Search;