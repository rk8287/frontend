import React from 'react';
import './AnimationCard.css';

const AnimationCard = ({ imageUrl, title, name, iconPath }) => {
  return (
    <div className='animation-main-container'>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <p className='title'>{title}</p>
          </div>
          <div className='flip-card-back'>
            <p className='title'>BACK</p>
            <p>{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimationCard;
