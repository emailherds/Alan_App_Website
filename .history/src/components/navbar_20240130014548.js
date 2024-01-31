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
                Alan App
              </Link>
            </div>
            <div className='menu-icon'>
            </div>
        </nav>
    </>
  );
}

export default Navbar
