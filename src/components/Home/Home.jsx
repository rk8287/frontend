import React from 'react'
import HeroBanner from '../HeroBanner/HeroBanner'
import Deals from '../../pages/Deals/Deals'
import FlightDeals from '../FlightDeals/FlightDeals'
import FlightOffers from '../FlightOffers/FlightOffers'
import Description from '../../pages/Description/Description'
import './Home.css'
import About from '../../pages/About/About'
import ContactSection from '../../pages/ContactSection/ContactSection'
import FAQ from '../../pages/FAQ/FAQ'
import OurServices from '../../pages/OurServices/OurServices'


const Home = () => {
  return (
  

    <div className='main-hom'>
    
    <HeroBanner/>
     <Deals/>
     <FlightDeals/>
     <About/>
     <Description/>
     <OurServices/>
     <FlightOffers/>
     <ContactSection/>
    <FAQ/>
    
    </div>
    
  )
}

export default Home