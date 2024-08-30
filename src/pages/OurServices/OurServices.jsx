import React from 'react';
import './OurServices.css';
import AnimationCard from '../AnimationCard/AnimationCard';

const OurServices = () => {
  const services = [
    {
      id: 1,
      imageUrl: 'path/to/image1.jpg', // replace with actual image paths
      title: 'Booking',
      name: 'At Book World Travel, we are passionate about travel. Our team of experts has years of experience and has traveled extensively to give you the best recommendations and advice. Whether you are a seasoned traveler or a first-time explorer, we are here to help you plan your next adventure.',
      iconPath: 'path/to/icon1.svg', // replace with actual icon paths
    },
    {
      id: 2,
      imageUrl: 'path/to/image2.jpg',
      title: 'Upgrade',
      name: 'We offer a range of services to make your travel experience seamless. We also provide personalized itinerary planning and recommendations based on your interests and budget.',
      iconPath: 'path/to/icon2.svg',
    },
    {
      id: 3,
      imageUrl: 'path/to/image2.jpg',
      title: 'Baggage',
      name: 'Information about traveling with bags Carry-on bags Learn about traveling with carry-on bags. Checked bags Learn about traveling with checked bags. Please contact +1 833-588-2699',
      iconPath: 'path/to/icon2.svg',
    },
    // Add more services as needed
  ];

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Our Services</h1>
      <div className='service-main-container'>
        {services.map(service => (
          <AnimationCard
            key={service.id}
            imageUrl={service.imageUrl}
            title={service.title}
            name={service.name}
            iconPath={service.iconPath}
          />
        ))}
      </div>
    </>
  );
}

export default OurServices;
