import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';  // <-- Add this import
import './Navbar.css';
import LoginPopup from './LoginPopup';  // <-- Add this import if LoginPopup exists

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleIntranetClick = () => {
    setShowPopup(true);  // Open the popup
  };

  const closePopup = () => {
    setShowPopup(false);  // Close the popup
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Agrovera
            <img src='/images/img18.png' alt='Logo' className='navbar-logo-img' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Acceuil
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                Présentation
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/production' className='nav-links' onClick={closeMobileMenu}>
                Production
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/membership' className='nav-links' onClick={closeMobileMenu}>
                Adhésion
              </Link>
            </li>

            <li className='nav-item'>
              <a href='#contact' className='nav-links' onClick={closeMobileMenu}>
                Contact
              </a>
            </li>

            {/* Intranet button to trigger the popup */}
            <li>
              <Button onClick={handleIntranetClick} buttonStyle='btn--outline'>
                Intranet
              </Button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Render the Login Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="popup-content">
              <button className="close-btn" onClick={closePopup}>
                &times;
              </button>
              <LoginPopup />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
