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
                <a href="mailto:info@timelesstravels.com" className="contact-btn email-btn">
                info@timelesstravels.com
                </a>
                <a href="tel:+18335882699" className="contact-btn phone-btn">
                    +1 833-588-2699 (Toll-free)
                </a>
            </div>
        </div>
    );
}

export default ContactSection;
