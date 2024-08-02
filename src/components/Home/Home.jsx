import React from 'react'
import HeroBanner from '../HeroBanner/HeroBanner'
import Deals from '../../pages/Deals/Deals'
import FlightDeals from '../FlightDeals/FlightDeals'
import FlightOffers from '../FlightOffers/FlightOffers'
import Description from '../../pages/Description/Description'
import PopularDeals from '../../pages/PopularDeals/PopularDeals'
import './Home.css'


const Home = () => {
  return (
  

    <div className='main-hom'>
    
    <HeroBanner/>
     <Deals/>
     <FlightDeals/>
     <Description/>
     <FlightOffers/>
     <PopularDeals/>
    </div>
    
  )
}

export default Home