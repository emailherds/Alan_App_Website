import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button.js'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);


  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className = "navbar-logo">
                Alan App&nbsp;<i className="fa-solid fa-at"></i>
              </Link>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to='/'className='nav-links'>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/about'className='nav-links'>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/features'className='nav-links'>
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/reviews'className='nav-links'>
                  Reviews
                </Link>
              </li>
            </ul>
            {button && <Button>Sign Up</Button>}
        </nav>
    </>
  );
}

export default Navbar
