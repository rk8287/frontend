import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <div className="contact-section">
            <h2>We'd love to hear from you!</h2>
            <p>
                Have a question about our services? Want to see if we can help with your vacation? Feel free to contact us!
            </p>
            <div className="contact-buttons">
                <a href="mailto:SUPPORT@TIMELESSTRAVEL.US" className="contact-btn email-btn">
                SUPPORT@TIMELESSTRAVEL.US
                </a>
                <a href="tel:+18444177506" className="contact-btn phone-btn">
                  +1(84) 441-775-06 (Toll-free)
                </a>
            </div>
        </div>
    );
}

export default ContactSection;
