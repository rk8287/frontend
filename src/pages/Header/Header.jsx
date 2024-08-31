import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

import { MdFlightTakeoff } from "react-icons/md";

const ic = require('../../assets/img/small2.gif');





const Header = () => {
    
    return (
        <>
            <header className="one-header">
                <div className="content">
                    <p>24x7 Live Assistance</p>
                    <p>(84) 441-775-06</p>
                    <p>SUPPORT@TIMELESSTRAVEL.US</p>
                </div>
            </header>

            <header className='second-header'>
                <div className="logos">
               <Link style={{color:'black'}} to={'/'}><h2>Time<span style={{color:"orangered"}}>less</span> Travels <MdFlightTakeoff className='logo-icons'/></h2></Link>
                </div>

             

                <div className="contact-no">
                    <img src={ic} alt="contact icon" />
                    <h2><Link style={{color:'orangered'}} to="tel:+1 8444177506">(84) 441-775-06</Link></h2>
                </div>

             
            </header>
        </>
    );
}

export default Header;
