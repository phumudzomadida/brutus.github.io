import React from 'react';
import './HomeComponent.css';


function HomeComponent() {
// scroll to about
const scrollToAbout = () => {
  const aboutSection = document.getElementById('about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
};


  return (
    <div className='home-contents'>
      <div className='Advert-content'>
        <p className='Ads-text'>BRUTUS JNR PROMOTIONS </p>
      </div>
      <div className='container-message-to-customer'>
          <p className='message-to-customers'>
            Get best Advertising 
          </p>
          <p className='message-to-customers' >videos with JNR Promotion</p>
      </div>
      <button onClick={scrollToAbout} >
        <span className="button_top"> 
        About BJPV 
        </span>
      </button>
    </div>   
  )
}

export default HomeComponent;