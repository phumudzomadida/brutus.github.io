import React from 'react'
import './AboutJnr.css'

function AboutJnr() {
  return (
    <div className='about-container' id='about'>
      <div className='header-container'>
        <h2 className='header-text'>About Brutus Jnr</h2>
      </div>
      <div className='about-items'>
        <div className='about-text' id='about-image'>

        </div>
        <div className='about-text'>
            <p className='text-about'>
                 Brutus Jnr Promotions is a media company 
                  that is focused in creating marketing content
                  for commercial and Non-commercial activities. 
                  As a team of incomperable creativeness, we strive
                  to make the best Audio, Photo, Printed and Video type 
                  of promotional content to help your brand  gain more audience
                  and grow as well. We also specialise in Graphic designs. Video and
                  Photography and Marketing sales. Our creativity is incomperable which
                  makes us more unique in the industry.
              </p>
        </div>
      </div>
      <div className='header-container'>
        <h2 className='header-text'>Vision</h2>
      </div>
      <div className='about-text' id='mission-vision'>
        <p className='text-about'>
          Our vision is to create best content for the world.
          we pride ourselves in mentoring, creating, distributing
          and managing proficient world-class content
        </p>
      </div>
      <div className='header-container'>
        <h2 className='header-text'>Mission</h2>
      </div>
      <div className='about-text' id='mission-vision'>
        <p className='text-about'>
          Putting more effort and creativity in our work and give
          our clients the best service that will positively impact
          the growth of their brand and enterprise
        </p>
      </div>
    </div>
    
  )
}

export default AboutJnr
