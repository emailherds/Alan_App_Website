import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className = "navbar-logo">
                Alan App <i class="fa-solid fa-at"></i>
              </Link>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to='/'className='nav-links'>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/'className='nav-links'>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/'className='nav-links'>
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/'className='nav-links'>
                  Reviews
                </Link>
              </li>
            </ul>
        </nav>
    </>
  );
}

export default Navbar
