
import React, { useState} from 'react';
import { Headphones, List, ListUl } from 'react-bootstrap-icons';
import './Header.css';

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href='/' className='navbar-logo' onClick={closeMobileMenu}>
            <Headphones />
            BJPV
          </a>
          <div className='menu-icon' onClick={handleClick}>
            {click? <ListUl className='fas fa-times'/> : <List className='fas fa-bars'/> }
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a  href='/' 
                  className='nav-links' 
                  onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
