import React from 'react'
import './Cancellation.css'

const img1 = require('../../assets/img/banner3.jpg')

const Cancellation = () => {
  return (
    <>

    <div className='about-main-container'>

<div className="about-main-section">

<div className="about-img-container">
  <img src={img1} alt="" />
  <div className="about-text-overlay">
  Cancellation Refund Policy
  </div>
  
</div>


<div className="about-des">
    
<div className="about-header">
  <h3>Cancellation Refund Policy</h3>
</div>

<hr />
  <p>At Timeless Travels, we understand that travel plans may change, and we strive to provide a hassle-free return and refund process for our valued customers. Please carefully review our Return and Refund Policy below for detailed information on how we handle flight cancellations, changes, and refund requests.</p>

    <p style={{fontWeight:'600'}}>Flight Changes and Cancellations:</p>

  <p><span style={{fontWeight:'600'}}>a. Flight Changes by Passengers:</span> If you wish to modify your flight reservation, such as changing the travel dates, destination, or passenger details, you may be able to do so depending on the fare rules and conditions associated with your ticket. Please note that flight changes are subject to availability, and fees and fare differences may apply. To make changes to your booking, you can do so through our website, mobile app, or by contacting our customer support team.</p>
  <p><span style={{fontWeight:'600'}}></span> If you decide to cancel your flight reservation, your eligibility for a refund and the amount of the refund will depend on the fare type and ticket conditions. Certain fares may be non-refundable, while others may allow partial or full refunds. To cancel your booking, please log in to your account on our website or contact our customer support team.</p>

 <p style={{fontWeight:'600'}}> Refund Eligibility: </p>

  <p><span style={{fontWeight:'600'}}>a. Refundable Fares:</span> If you have purchased a refundable ticket, you may be eligible for a full or partial refund, subject to any applicable cancellation fees. Refunds for refundable tickets will be processed using the original payment method used during the booking.</p>
  <p><span style={{fontWeight:'600'}}>b. Non-Refundable Fares:</span> Non-refundable tickets are generally not eligible for a refund, but some taxes and fees may be refundable. If you are uncertain about the refund eligibility of your ticket, please refer to the fare rules or contact our customer support team for clarification.</p>
  <p style={{fontWeight:'600'}}>Processing Time for Refunds:</p>

  <p><span style={{fontWeight:'600'}}>a. Refund for Cancelled Flights:</span> If we cancel your flight due to operational or safety reasons, you will be eligible for a full refund to the original payment method. We aim to process such refunds as quickly as possible, and you can expect the amount to be credited back to your account within the time frame specified by your financial institution.</p>
  <p><span style={{fontWeight:'600'}}>b. Refund for Passenger-Initiated Cancellations:</span> For eligible refundable tickets and cancellations made within the permitted time frame, we will process the refund to the original payment method as promptly as possible. Please note that processing times may vary based on your payment provider and may take several business days.</p>

  <p style={{fontWeight:'600'}}>Denied Boarding and Involuntary Changes:</p>
  <p>In cases of denied boarding due to overbooking or involuntary changes to your flight schedule, you may be eligible for compensation or rebooking on an alternate flight. Our customer support team will assist you with the necessary arrangements and compensation according to applicable laws and regulations.</p>

  <p style={{fontWeight:'600'}}>Refunds for Ancillary Services:</p>

  <p>For additional services purchased during your booking, such as seat upgrades, baggage fees, or onboard amenities, refunds will be processed according to their respective terms and conditions.</p>
</div>

</div>
</div>
   </>
  )
}

export default Cancellation