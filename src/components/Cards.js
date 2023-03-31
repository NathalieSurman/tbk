import React from "react";
import { CardItem } from "./CardItem";
import "./Cards.css";

export const Cards = () => {
  return (
    <div className="cards">
      <h1>Packages and Options</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/kayakicon.png"
              text="Kayak Rentals"
              // path="/services"
              subTitle="Single Kayak Rentals"
           >
              <div className="cards_items">
                <h4>Single Kayak Rentals </h4>
                <ul>
                  <li>First hour $35</li>
                  <li>Two hours $55</li>
                  <li>Weekday daily max $90</li>
                </ul>
                <h4>Tandem (Double) Kayak Rentals</h4>
                <ul>
                  <li>First hour $70</li>
                  <li>Two hours $100</li>
                </ul>
                <p>
                  Group discount of 10% when you rent 5 or more kayaks - use
                  Promo Code Summer2022 at check out! All first time-renters
                  will receive 10 minute on-land orientation and paddling
                  refresher before heading out on the water.
                </p>
              </div>
            </CardItem>
            <CardItem
              src="images/pass.png"
              text="Kayak Rental Passes"
              // path="/products"
            />
            <CardItem
              src="images/team.png"
              text="Kayak Lessons"
              // path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};
