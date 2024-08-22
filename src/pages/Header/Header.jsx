import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import { MdFlightTakeoff } from "react-icons/md";

const ic = require('../../assets/img/small2.gif');





const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className="one-header">
                <div className="content">
                    <p>24x7 Live Assistance</p>
                    <p>(833) 588-2699</p>
                    <p>info@timetravels.com</p>
                </div>
            </header>

            <header className='second-header'>
                <div className="logos">
               <Link style={{color:'black'}} to={'/'}><h2>Time<span style={{color:"orangered"}}>less</span> Travels <MdFlightTakeoff className='logo-icons'/></h2></Link>
                </div>

             

                <div className="contact-no">
                    <img src={ic} alt="contact icon" />
                    <h2><Link to="tel:+8335882699">(833) 588-2699</Link></h2>
                </div>

                <div className="hamburger-menu" onClick={toggleMobileMenu}>
                    <div className={`hamburger-icon ${isMobileMenuOpen ? 'open' : ''}`}></div>
                </div>
            </header>
        </>
    );
}

export default Header;
