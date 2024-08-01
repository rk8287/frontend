import React from 'react'
import './HeroBanner.css'
import Search from '../Search/Search'
import { TiTick } from "react-icons/ti";

const HeroBanner = () => {
    return (
        <div className="hero-section">
            <div className="overlayy">
                <h2><span style={{color:'orangered'}}>Compare</span> and Book</h2>
                <h1>Cheap Flights on Over <span style={{color:"#f54c4c"}}>600 Airlines</span></h1>
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