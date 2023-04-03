import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
// import { CardItem } from "./CardItem";
import "./Cards.css";
// import { ViewKayakButton } from "./ViewKayakButton";

export const Cards = () => {
  return (
    <div className="cards">
      <h1>Packages and Options</h1>
      <div className="refundP">
      <p className="refund">
        For on-line reservations ONLY: our prices include taxes & service
        charges. All reservations cancelled with 24-hour notice or cancelled due
        to unpleasant or unsafe paddling conditions will be fully refunded.
      </p>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <>
              <div className="cards_item">
                <div className="cards__item__link">
                  <figure className="cards__item__pic-wrap">
                    <img
                      className="cards__item__img"
                      alt=""
                      src="images/dog.jpg"
                    />
                  </figure>
                  <div className="cards__item__info">
                    <h5 className="cards__item__text">Kayak Rentals</h5>

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
                    <p>
                      {" "}
                      <b>Book Now </b>to make your kayak rental reservation.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </>
            <>
              <div className="cards_item">
                <div className="cards__item__link">
                  <figure className="cards__item__pic-wrap">
                    <img
                      className="cards__item__img"
                      alt=""
                      src="images/IMG_2029.jpg"
                    />
                  </figure>
                  <div className="cards__item__info">
                    <h5 className="cards__item__text">Kayak Rental Passes</h5>

                    <h4>Kayak 5-Pass (5 x 1-hr rentals) </h4>
                    <ul>
                      <li>$140 (available soon!)</li>
                    </ul>
                    <h4>Kayak 10-Pass (10 x 1-hr rentals) </h4>
                    <ul>
                      <li>$250 (available soon!)</li>
                    </ul>
                    <p>
                      Passes can be used for single and tandem kayak rentals but
                      tandem kayaks use 2-passes. Passes can be shared with
                      immediate family members. Passes can be used any day of
                      the paddling season. Passes expire at the end of the
                      season and unused passes can not be used in any subsequent
                      season.
                    </p>
                    <p>
                      Please email{" "}
                      <a href="team@torontobeachkayak.ca">
                        team@torontobeachkayak.ca{" "}
                      </a>{" "}
                      or text us at 416 629-6040 to arrange for a lesson.
                    </p>
                  </div>
                </div>
              </div>
            </>

            <>
              <div className="cards_item">
                <div className="cards__item__link">
                  <figure className="cards__item__pic-wrap">
                    <img
                      className="cards__item__img"
                      alt=""
                      src="images/IMG_1971.jpg"
                    />
                  </figure>
                  <div className="cards__item__info">
                    <h5 className="cards__item__text">Kayak Lessons</h5>
                    <div className="lessons">
                      <h4>Private Lesson (1): $100 pp</h4>
                      <h4>Semi-Private Lesson (2): $80 pp</h4>
                      <h4>Group Lesson (3 or more): $60 pp</h4>
                    </div>
                    <p>
                      All lessons are one hour and include 10-20 minutes on-land
                      instruction followed by an instructor-led paddle and tour
                      of the area.
                    </p>
                    <p>
                      Please email{" "}
                      <a href="team@torontobeachkayak.ca">
                        team@torontobeachkayak.ca{" "}
                      </a>{" "}
                      or text us at 416 629-6040 to arrange for a lesson.
                    </p>
                  </div>
                </div>
              </div>
            </>
          </ul>
        </div>
      </div>
      <div className="buttonDiv">
        <Link to="/viewKayaks" style={{ textDecoration: "none" }}>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            View Our Kayaks
          </Button>
        </Link>
      </div>
    </div>
  );
};
