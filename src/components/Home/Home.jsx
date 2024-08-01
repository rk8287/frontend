import React from 'react'
import HeroBanner from '../HeroBanner/HeroBanner'
import Deals from '../../pages/Deals/Deals'
import FlightDeals from '../FlightDeals/FlightDeals'
import FlightOffers from '../FlightOffers/FlightOffers'
import Description from '../../pages/Description/Description'
import PopularDeals from '../../pages/PopularDeals/PopularDeals'


const Home = () => {
  return (
  

    <>
    
    <HeroBanner/>
     <Deals/>
     <FlightDeals/>
     <Description/>
     <FlightOffers/>
     <PopularDeals/>
    </>
    
  )
}

export default Home