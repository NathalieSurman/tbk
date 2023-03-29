import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./NavBar.css";

export const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [button, setButton] = useState(true);

  //---HERE is the function that is going to remove then displays the button/Ham-burger-Menu on mobile or depending on screen size --//
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

  //--When we resize the screen we want to get the show button function --//
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {/* <img src="/images/tbk-logo.png"/> */}
            TBK
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/contactUs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/weather'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Weather
              </Link>
            </li>

            <li>
              <Link
                to='/booknow'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Book Now
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>BOOK NOW</Button>}
        </div>
      </nav>
    </>
  );
};
