import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button.js';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='mynavbar'>
        <div className='mynavbar-container'>
          <Link to='/' className='mynavbar-logo' onClick={closeMobileMenu}>
            Alan App&nbsp;<i className='fa-solid fa-at'></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'mynav-menu active' : 'mynav-menu'}>
            <li className='mynav-item'>
              <Link to='/' className='mynav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='mynav-item'>
              <Link to='/about' className='mynav-links' onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className='mynav-item'>
              <Link to='/features' className='mynav-links' onClick={closeMobileMenu}>
                Features
              </Link>
            </li>
            <li className='mynav-item'>
              <Link to='/reviews' className='mynav-links' onClick={closeMobileMenu}>
                Reviews
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;