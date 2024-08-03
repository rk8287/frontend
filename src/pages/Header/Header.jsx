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
                    <p>+1-800-400-500</p>
                    <p>info@timetravels.com</p>
                </div>
            </header>

            <header className='second-header'>
                <div className="logos">
                    <h2>Time<span style={{color:"orangered"}}>less</span> Travels <MdFlightTakeoff className='logo-icons'/></h2>
                </div>

                <nav className={`nav-bar ${isMobileMenuOpen ? 'open' : ''}`}>
                    <Link className='link' to="/" onClick={toggleMobileMenu}><FaHome className='center'/>Home</Link>
                    <Link className='link' to="/special-offers" onClick={toggleMobileMenu}><MdOutlineFlightTakeoff className='center'/>Special Offers</Link>
                    <Link className='link' to="/about" onClick={toggleMobileMenu}><FaUser className='center'/>About Us</Link>
                    <Link className='link' to="/contact" onClick={toggleMobileMenu}><FaPhoneAlt className='center'/>Contact Us</Link>
                </nav>

                <div className="contact-no">
                    <img src={ic} alt="contact icon" />
                    <h2 className='call-me'>+1-800-300-500</h2>
                </div>

                <div className="hamburger-menu" onClick={toggleMobileMenu}>
                    <div className={`hamburger-icon ${isMobileMenuOpen ? 'open' : ''}`}></div>
                </div>
            </header>
        </>
    );
}

export default Header;
