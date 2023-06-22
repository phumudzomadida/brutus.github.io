import React from 'react';
import './Services.css';
import CardItems from './CardItems';

//importing images
import voiceCovers from '../Images/voice-Covers.jpg';
import audioAdverts from '../Images/audioAdverts.jpg';
import graphicDesign from '../Images/graphicDesings.jpg';
import marketing from '../Images/marketing.jpg';
import photography from '../Images/photography.jpg';


function Services() {

  //list of all services provided
  const services = [
    {
      id: 0,
      service: 'Voice covers',
      about: 'We create greates voice-overs that project a message and arouse emotion',
      image: voiceCovers
    },
    {
      id: 1,
      service: 'Visual and Audio adverts',
      about: 'We create the best advrts in a form of videos and audios that meets radio and television standards',
      image: audioAdverts
    },
    {
      id: 2,
      service:'Promotions and Marketing Sales',
      about: 'Our team strives in putting brands to the eys of audience',
      image: marketing
    },
    {
      id: 3,
      service:'Graphic designs',
      about: 'we create your imagination and bring it to real life.',
      image: graphicDesign
    },
    {
      id: 4,
      service:'Video and Photography',
      about: 'Get quality videos and Photography',
      image: photography
    }
  ]
  // handle flatlist
  const listItems = services.map((service) => 
    <CardItems 
    key={service.id}
    service={service.service} 
    about_service={service.about} 
    image={service.image}
    />
  )
  return (
    <div className='service-container' id='services'>
      <div className='header-container'>
        <h1 className='header'>Services</h1>
      </div>
      <div className='items-container'>
        {listItems}
      </div>
    </div>
  )
}

export default Services
