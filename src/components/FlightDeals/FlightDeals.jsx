import React from 'react';
import './FlightDeals.css';
import { Link } from 'react-router-dom';

const first = require('../../assets/img/Maldives_img.jpg')
const second = require('../../assets/img/Paris_img.jpg')
const third = require('../../assets/img/Dubai_img.jpg')
const fourth = require('../../assets/img/skiing-5878729_1280.jpg')
const fifth = require('../../assets/img/temple-6823939_1280.jpg')

const deals = [
  { id: 1, title: 'London Flights', img: first },
  { id: 2, title: 'Maldives Flights', img: second, bestDeal: true },
  { id: 3, title: 'New York Flights', img: third },
  { id: 4, title: 'Paris Flights', img: fourth, bestDeal: true },
  { id: 5, title: 'China Flights', img: fifth },
  { id: 6, title: 'London Flights', img: first },
  { id: 7, title: 'Maldives Flights', img: second, bestDeal: true },
  { id: 8, title: 'New York Flights', img: third },
 
];

const FlightDeals = () => {
  return (
    <section className="flight-deals">
      <h2>Domestic & International Destinations</h2>
      <p>Browse numbers of exotic destinations with best fares for all domestic and also international flights.</p>
     <Link to={'/contact'}> <div className="deals-container">
        {deals.map(deal => (
          <div key={deal.id} className="deal-card">
            <img src={deal.img} alt={deal.title} />
            {deal.bestDeal && <div className="best-deal-badge">Best Deals</div>}
            <h3>{deal.title}</h3>
            <p>Find great flight deals</p>
          </div>
        ))}
      </div></Link>
    </section>
  );
}

export default FlightDeals;
