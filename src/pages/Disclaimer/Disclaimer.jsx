import React from 'react'
import './Disclaimer.css'

const img1 = require('../../assets/img/banner3.jpg')

const Disclaimer = () => {
  return (
    <>

    <div className='about-main-container'>

<div className="about-main-section">

<div className="about-img-container">
  <img src={img1} alt="" />
  <div className="about-text-overlay">
  Disclaimer
  </div>
  
</div>


<div className="about-des">
    
<div className="about-header">
  <h3>Disclaimer & Discount Policy</h3>
</div>

<hr />
  <p>The information that is provided and published on Timeless Travels is complete and accurate to the best of our knowledge. To make sure that the content, prices, and data along with other details are correct, Timeless Travels sources it from our service providers. We take all the steps and make sure that we provide you with complete information and keep on updating it timely. However, the travel industry is dynamic and market complexity, fare changes are all subject to further changes. We keep on upgrading the same without giving you any prior intimation.</p>

    <p style={{fontWeight:'600'}}>Timeless Travels Disclaimer</p>
<p>According to our Terms & Conditions, Timeless Travels has no liabilities to bear the loss, damage, or injury caused to you because of your dependency on information provided by us. It stands valid for all the content, data, and fares published on TimelessTravels.com as well as websites linked to our website.</p>

<p>Any offers and deals that we provide on Timeless Travels keep on varying and are dependent on the travel industry's determinants. Several factors are responsible for this variation like date of travel, date of the booking, blackout date, and any prior mentioned terms and conditions. The fares may change without any prior information to you, and if you claim any discounts, we conduct an assessment to evaluate if it stands valid on your bookings.</p>

  
</div>
</div>
</div>
   </>
  )
}

export default Disclaimer