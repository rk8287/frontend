import React from 'react'
import './HeroBanner.css'
import Search from '../Search/Search'
import { TiTick } from "react-icons/ti";

const HeroBanner = () => {
    return (
        <div className="hero-section">
            <div className="overlayy">
               
                <h1>Find<span style={{color:"#f54c4c",fontWeight:'800'}}> cheap flights </span>and save</h1>
                <h2>Search and compare our best deals with over 400+ airlines - <span style={{color:'orangered'}}>Book now!</span></h2>
                <Search />

                <div className="other-dtails">
                    <div className="det">
                        <div className="icon">
                        <TiTick/>
                        </div>
                        <div className="text">24x7 Live Assistance</div>
                    </div>

                    <div className="det">
                        <div className="icon">
                        <TiTick/>
                        </div>
                        <div className="text">24x7 Live Assistance</div>
                    </div>

                    <div className="det">
                        <div className="icon">
                        <TiTick/>
                        </div>
                        <div className="text">24x7 Live Assistance</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeroBanner