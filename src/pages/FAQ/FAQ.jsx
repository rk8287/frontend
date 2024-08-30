import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        { question: "What is an E-ticket?", answer: "E-tickets are offered by many major airlines and allow you to travel without a paper ticket..." },
        { question: "How do I cancel this reservation?", answer: "To cancel your reservation, go to the cancellation page and enter your booking details..." },
        { question: "Baggage and Check-in policy?", answer: "Baggage and check-in policies vary by airline. Please check your airline's specific guidelines..." },
        { question: "How do I change my flight?", answer: "To change your flight, visit the flight management page and select the option to modify your booking..." }
    ];

    return (
        <div className="faq-container">
            <h1>FAQs</h1>
            {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleAnswer(index)}>
                        {item.question}
                    </div>
                    {activeIndex === index && (
                        <div className="faq-answer">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
