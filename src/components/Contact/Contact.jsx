import React, { useState, useEffect } from 'react';
import { MdFlightTakeoff, MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Scroll to the top of the page when this component is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateMobileNumber = (number) => {
    const re = /^[0-9]{10}$/; // Example: only 10 digit numbers
    return re.test(String(number));
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Validate the form inputs
    if (!name) {
      setError('Please enter your name.');
      return;
    }

    if (!email || !validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!mobileNumber || !validateMobileNumber(mobileNumber)) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!message || message.length < 10) {
      setError('Please enter a message of at least 10 characters.');
      return;
    }

    // Clear error message if all validations pass
    setError('');

    // If all fields are valid, navigate to the success page
    navigate('/success');
  };

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
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-box">
                <MdEmail className="input-icon" />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-box">
              <MdPhone className="input-icon" />
              <input
                type="text"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <MdFlightTakeoff className="input-icon" />
              <textarea
                placeholder="Write message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button onClick={handleClick} type="submit">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            <MdLocationOn className="info-icon" /> Address
          </p>
          <p>737 E 105TH PL CHICAGO, IL 60628</p>
          <p>
            <MdPhone className="info-icon" /> Toll Free
          </p>
          <p>
            Call Now: <a href="tel:+1 8444177506">+1 (844) 417-7506</a>
          </p>
          <p>
            <MdEmail className="info-icon" /> Email
          </p>
          <p>
            <a href="mailto:SUPPORT@TIMELESSTRAVEL.US">
              SUPPORT@TIMELESSTRAVEL.US
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
