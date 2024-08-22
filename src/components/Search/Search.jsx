import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import airportData from "../../assets/img/airportData.json";

const Search = () => {
  const [numAdults, setNumAdults] = useState(1);
  const [airportOptions, setAirportOptions] = useState([]);
  const [numChildren, setNumChildren] = useState(0);
  const [numInfants, setNumInfants] = useState(0);
  const [showPassengerOption, setShowPassengerOption] = useState(false);
  const [loading, setLoading] = useState(false);
  const [leavingFrom, setLeavingFrom] = useState("");
  const [goingTo, setGoingTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returningDate, setReturningDate] = useState("");
  const [flightClass, setFlightClass] = useState("Economy");
  const [tripType, setTripType] = useState("round-trip");

  useEffect(() => {
    const formattedAirportData = airportData.map((airport) => ({
      code: airport.AirportCode,
      name: airport.AirportName
    }));
    setAirportOptions(formattedAirportData);
  }, []);

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
    if (!leavingFrom || !goingTo || !departureDate || (tripType === "round-trip" && !returningDate)) {
      alert("Please fill in all required fields.");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Search functionality is not implemented in this demo.");
    }, 2000);
  };

  return (
    <Box
      sx={{
        width: '100%',
        padding: 2,
        boxSizing: 'border-box',
        backgroundColor: '#f5f5f5',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant={tripType === "round-trip" ? "contained" : "outlined"}
            onClick={() => setTripType("round-trip")}
            fullWidth
          >
            Round trip
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant={tripType === "one-way" ? "contained" : "outlined"}
            onClick={() => setTripType("one-way")}
            fullWidth
          >
            One way
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel>Class</InputLabel>
            <Select
              value={flightClass}
              onChange={(e) => setFlightClass(e.target.value)}
              label="Class"
            >
              <MenuItem value="Economy">Economy</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="First">First</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel>Leaving from</InputLabel>
            <Select
              value={leavingFrom}
              onChange={(e) => setLeavingFrom(e.target.value)}
              label="Leaving from"
            >
              {airportOptions.map((airport) => (
                <MenuItem key={airport.code} value={airport.code}>
                  {airport.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel>Going to</InputLabel>
            <Select
              value={goingTo}
              onChange={(e) => setGoingTo(e.target.value)}
              label="Going to"
            >
              {airportOptions.map((airport) => (
                <MenuItem key={airport.code} value={airport.code}>
                  {airport.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            type="date"
            label="Departing"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CalendarTodayIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        {tripType === "round-trip" && (
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              type="date"
              label="Returning"
              value={returningDate}
              onChange={(e) => setReturningDate(e.target.value)}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarTodayIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        )}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Passenger(s)"
            value={`${numAdults} Adult${numAdults > 1 ? 's' : ''}, ${numChildren} Child${numChildren > 1 ? 'ren' : ''}, ${numInfants} Infant${numInfants > 1 ? 's' : ''}`}
            InputProps={{
              readOnly: true,
            }}
          />
          <Button onClick={handleToggleShowPassenger} variant="outlined" fullWidth>
            {showPassengerOption ? "Hide Passengers" : "Show Passengers"}
          </Button>
          {showPassengerOption && (
            <Box sx={{ mt: 2 }}>
              <Button onClick={() => handlePassengerChange('adults', 1)} variant="outlined">+ Adult</Button>
              <Button onClick={() => handlePassengerChange('adults', -1)} variant="outlined">- Adult</Button>
              <Button onClick={() => handlePassengerChange('children', 1)} variant="outlined">+ Child</Button>
              <Button onClick={() => handlePassengerChange('children', -1)} variant="outlined">- Child</Button>
              <Button onClick={() => handlePassengerChange('infants', 1)} variant="outlined">+ Infant</Button>
              <Button onClick={() => handlePassengerChange('infants', -1)} variant="outlined">- Infant</Button>
            </Box>
          )}
        </Grid>
      </Grid>

      <Button
        onClick={handleSearch}
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </Button>
    </Box>
  );
};

export default Search;
