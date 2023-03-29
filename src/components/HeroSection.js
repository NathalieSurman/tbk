import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
// import {IoShieldCheckmarkOutline} from "react-icons/io"
import { RiShieldCheckLine} from 'react-icons/ri';

export const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
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
    </div>
  );
};
