import React from 'react';
import './ThankYou.css'; // Import the CSS file

const ThankYouPage = () => {
    return (
        <div className="thank-you-container">
        <div className="card">
            <div className="circle">
                <i className="checkmark">✓</i>
            </div>
            <h1 className='h1'>Success</h1>
            <p className='p'>We received your request;<br /> we'll be in touch shortly!</p>
        
            <div className="thank-you-box">
                <h1 className="thank-you-title">Thank You!</h1>
                <p className="thank-you-message">
                    Thank you for contacting us. Our representative will contact you within 5-10 minutes.
                </p>
                <a href="/" className="back-home-button">Back to Home</a>
            </div>
        </div>
    </div>
    );
};

export default ThankYouPage;
