import React from 'react';
import './PopularDeals.css';
import TwoFlight from "../../assets/img/twoflight.png";
import F from "../../assets/img/f.png";
import S from "../../assets/img/s.png";
import Spirit from "../../assets/img/spirit.png";
import Ar from "../../assets/img/ar.png";
import J from "../../assets/img/j.png";
import W from "../../assets/img/w.png";
import H from "../../assets/img/h.png";
import G from "../../assets/img/g.png";

const PopularDeals = () => {
  const deals = [
    {
      origin: 'LAS',
      destination: 'ONT',
      price: '$42.34',
      departureDate: 'Jun 03, 2024',
      arrivalDate: 'Jun 03, 2024',
      isDomestic: true,
      image: F,
    },
    {
      origin: 'DTW',
      destination: 'MSP',
      price: '$113.09',
      departureDate: 'May 30, 2024',
      arrivalDate: 'May 30, 2024',
      isDomestic: true,
      image: S,
    },
    {
      origin: 'MCO',
      destination: 'BOS',
      price: '$212.2',
      departureDate: 'Sep 27, 2024',
      arrivalDate: 'Sep 27, 2024',
      isDomestic: true,
      image: J,
    },
    {
      origin: 'CLE',
      destination: 'LGA',
      price: '$228.2',
      departureDate: 'Mar 31, 2024',
      arrivalDate: 'Mar 31, 2024',
      isDomestic: false,
      image: W,
    },
    {
      origin: 'LAX',
      destination: 'BNA',
      price: '$321.0',
      departureDate: 'Jun 13, 2024',
      arrivalDate: 'Jun 13, 2024',
      isDomestic: true,
      image: Spirit,
    },
    {
      origin: 'MIA',
      destination: 'IEV',
      price: '$236.19',
      departureDate: 'Jun 19, 2024',
      arrivalDate: 'Jun 19, 2024',
      isDomestic: false,
      image: G,
    },
    {
      origin: 'OGD',
      destination: 'SFO',
      price: '$176.21',
      departureDate: 'Apr 17, 2024',
      arrivalDate: 'Apr 17, 2024',
      isDomestic: true,
      image: H,
    },
    {
      origin: 'BUR',
      destination: 'SAN',
      price: '$221.05',
      departureDate: 'Apr 22, 2024',
      arrivalDate: 'Apr 22, 2024',
      isDomestic: true,
      image: Ar,
    },
  ];

  return (
    <div className="popular-deals-container-over">
      <h2>Popular <span style={{ color: "#283C8B" }}>Deals</span></h2>
      <div className="deals-grid-over">
        {deals.map((deal, index) => (
          <div className="deal-card-over" key={index}>
            <div className="deal-info-over">
              <div className="deal-cities-over">
                <img src={deal.image} alt="" />
              </div>
              <div className="deal-cities-over">
                <h3 className="origin-over">{deal.origin}</h3>
                <h4 className="destination-over">{deal.arrivalDate}</h4>
              </div>
              <img src={TwoFlight} alt=""  className="two-flight-animation"  />
              <div className="deal-cities-over">
                <h3 className="origin-over">{deal.destination}</h3>
                <h4 className="destination-over">{deal.departureDate}</h4>
              </div>
              <div className="deal-cities-over">
                <h3 className="origin-over">{deal.price}</h3>
                <button className='dealsB-over'>search now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDeals;
