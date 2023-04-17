import React from 'react';
import './Footer.css';


export const Footer = () => {
  return (
 
<section  className='footer-sec'>
  <div className='footer-container'> 
  <div class="main-footer">
    <div class="logoinfo" data-aos="fade-up">

      <div class="contact-details">
        <h1 className='footer-tit'>Contact Us</h1>
        <li  className='footer-li'>
          <div class="fa fa-phone"></div><a href="tel:+4166296040">+416-629-6040</a></li>
        <li  className='footer-li'>
          <div class="fa fa-envelope"></div><a href="team@torontobeachkayak.ca">team@torontobeachkayak.ca</a></li>
          <li  className='footer-li'>
          <div class="fa fa-map-marker"></div><a href="https://www.google.com/maps/dir//77+Kewbeach+Ave,+Toronto,+ON+M4L+1B8/@43.6662398,-79.3705337,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89d4cbf9e9996849:0xaff59a67fbbccca9!2m2!1d-79.3004939!2d43.6662612">77 Kew Beach Ave, 
          Toronto, Ontario, Canada</a></li>
        </div>
    </div>
  </div>
  <div class="com " data-aos="fade-up">
  <h1 className='footer-tit'>Our Partnerships</h1>
    <ul className='footer-ul'>
    <li className='footer-li'><a href="https://clearwaterdesign.shop/">ClearWater</a></li>
      <li className='footer-li'><a href="https://www.peekpro.com/https://www.peekpro.com/">PeekPro</a></li>
      <li className='footer-li'><a href="https://www.wsuptoronto.ca/">WSUP</a></li>
    </ul>
  </div>
  <div class="info" data-aos="fade-up">
    <h1 className='footer-tit'>Social Media</h1>
    <div class="sociallogos">
      <div class="logobox">
      <a href="https://www.instagram.com/torontobeachkayak/" class="fa fa-instagram"></a>
        <a href="https://www.facebook.com/torontobeachkayak.ca/" class="fa fa-facebook"></a>
         <a href="#" class="fa fa-twitter"></a>
      </div>
    </div>
  </div>
  <div class="footer-image-logo" data-aos="fade-up">
<img src='./images/tbk-logo.png' className='footer-img'/>
  </div>
  </div>
  
<footer>© Toronto Kayak Beach Copyright 2023 All Rights Reserved</footer>

</section>

  );
}

