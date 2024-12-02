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
        <nav className="mynavbar">
            <div className="mynavbar-container">
              <Link to="/" className = "mynavbar-logo">
                Alan App<img src={`${process.env.PUBLIC_URL}/images/alan_logo.jpg`}></img>
              </Link>
            </div>
            <ul className={click ? 'mynav-menu active' : 'mynav-menu'}>
              <li className="mynav-item">
                <Link to='/'className='mynav-links'>
                  Home
                </Link>
              </li>
              <li className="mynav-item">
                <Link to='/about'className='mynav-links'>
                  About Us
                </Link>
              </li>
              <li className="mynav-item">
                <Link to='/features'className='mynav-links'>
                  Features
                </Link>
              </li>
              <li className="mynav-item">
                <Link to='/reviews'className='mynav-links'>
                  Reviews
                </Link>
              </li>
            </ul>
       </nav>
    </>
  );
}

export default Navbar
