import React from 'react';
import './Footer.css';
import { Whatsapp, Phone, Instagram, Facebook, Twitter, } from 'react-bootstrap-icons';

function Footer() {
  return (
    <div className='footer-container' >
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <div className='brutus-abbr'>
                <button data-text="Awesome" className="button">
                    <span className="actual-text">&nbsp;BJPV&nbsp;</span>
                    <span className="hover-text" aria-hidden="true">&nbsp;BJPV&nbsp;</span>
                </button>
            </div>
          </div>
          <div className='footer-link-items'>
            <h2>About Brutus</h2>
            <div className='about-brutus'>
                <a href='/'>Brutus Store</a>
            </div>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.facebook.com/profile.php?id=100071893959747&mibextid=ZbWKwL' >Facebook</a>
            <a href='https://youtu.be/85tJ6HglckY'>YouTube</a>
            <a href='https://twitter.com/BJP_2000/status/1483398872726749184?s=20'>Twitter</a>
            <a href='https://instagram.com/brutus_jnr_promotions?igshid=ZDc4ODBmNjlmNQ=='>Instagram</a>
            <a href='https://vm.tiktok.com/ZM2AXYtAY/'>TikTok</a>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <a href='/'><Whatsapp />  (+27)64 640 4250</a>  
            <a href='/'> <Phone /> (064) 640 4250</a>
            <a href='/'> <Instagram /> @brutus jnr Promotions </a>
            <a href='/'>< Facebook /> @brutus jnr Promotions</a>
            <a href='/'>< Twitter /> @bjp_2000</a>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Footer;