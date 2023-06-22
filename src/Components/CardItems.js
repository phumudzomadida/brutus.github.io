import React from 'react';
import './CardItems.css';


function CardItems({image, service, about_service}) {
  return (
    <div className='item-container'>
        <div className='image-container'>
          <img src={image} className='image-container' />
        </div>        
        <div className='about-items-container'>
            <div className='service-name'>
                <label>{service}</label>
            </div>
            <div className='about-item'>
                <p className='text'>{about_service}</p>
            </div>
        </div>
    </div>
  )
}

export default CardItems
