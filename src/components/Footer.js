import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
   
<footer class="footer-distributed">

<div class="footer-left">
<div class="logo-widget">
    <figure class="logo-box"><a href="#"><img src="./images/tbk-logo-darker.png" alt=""/></a></figure>
    </div>

  {/* <h3>Company<span>logo</span></h3> */}

  {/* <p class="footer-links">
    <a href="#" class="link-1">Home</a>
  
    <a href="#">About</a>
    
    <a href="#">Faq</a>
    
    <a href="#">Contact</a>
  </p> */}

  {/* <p class="footer-company-name">Toronto Beach Kayak © 2023</p> */}
</div>

<div class="footer-center">

  <div>
    <i class="fa fa-map-marker"></i>
    <p><span>77 Kew Beach Ave,</span>  Toronto, Ontario, Canada</p>
  </div>

  <div>
    <i class="fa fa-phone"></i>
    <p>(416)-629-6040</p>
  </div>

  <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com"> team@torontobeachkayak.ca</a></p>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span>Our Partnerships</span>
    ClearWater,
    PeekPro, WSUP
  </p>

  <div class="footer-icons">

    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
  
    <a href="#"><i class="fa-brands fa-instagram"></i></a>

  </div>

</div>

</footer>
  );
}

