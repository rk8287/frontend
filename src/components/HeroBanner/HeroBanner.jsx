import React from 'react'
import './HeroBanner.css'
import { TiTick } from "react-icons/ti";
const vc = require('../../assets/img/3740041-uhd_3840_2160_24fps.mp4')

const HeroBanner = () => {
    return (
        <div className="hero-section">

<video className="video-background" autoPlay loop muted playsInline>
                <source src={vc} type="video/mp4" />
                {/* Provide a fallback for browsers that don't support the video */}
                Your browser does not support the video tag.
            </video>

            <div className="overlayy">
               
                <h1>Find<span style={{color:"#f54c4c",fontWeight:'800'}}> cheap flights </span>and save</h1>
                <h2>Search and compare our best deals with over 400+ airlines - <span style={{color:'orangered'}}>Book now!</span></h2>
                

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