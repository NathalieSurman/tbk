import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
// import {IoShieldCheckmarkOutline} from "react-icons/io"
import { RiShieldCheckLine} from 'react-icons/ri';




export const HeroSection = ({prop}) => {
  return (
    <div className="hero-container">
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <h1>Kayak Rentals & Lessons for the Whole Family!</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          WAIVER <RiShieldCheckLine/>
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          BOOK NOW  <i class="fa-solid fa-calendar-check"></i>
        </Button>
        
      </div>
      <div className="social-ig">
      <p>Click Icon To Get Updates <a href="https://www.instagram.com/torontobeachkayak/" class="fa-brands fa-instagram"></a></p>
      </div>
      
      
    </div>
  );
};



{/* <i class="fa-brands fa-square-instagram"></i> */}

{/* <i class="fa-brands fa-instagram"></i> */}