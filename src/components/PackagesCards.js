import React from 'react'
import "./PackagesCards.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const PackagesCards = () => {
  return (
    <div className='containerpac'>
         <h1 class="card__titlepactop">Packages and Options</h1>
         <div className="refundP">
      <p className="refundPac">
        For on-line reservations ONLY: our prices include taxes & service
        charges. All reservations cancelled with 24-hour notice or cancelled due
        to unpleasant or unsafe paddling conditions will be fully refunded.
      </p>
      
      </div>
      
        <ul class="cardspac">
  <li class="cards__itempac">
    <div class="cardpac">
      <div class="card__image card__image--dog"></div>
      <div class="card__contentpac">
        <div class="card__titlepac">Kayak Rentals</div>
        <p class="card__textpac">Group discount of 15% for groups of 10 paddlers or more - use
            Promo Code Summer2022 at check out! All first time-renters
            will receive 10 minute on-land orientation and paddling
            refresher before heading out on the water. <a href="https://book.peek.com/s/216805e5-bad2-47ed-be72-432a10ce33c4/eLE83" target="_blank" rel="noopener noreferrer">Click Book Now</a> to make your kayak rental reservation.</p>
        
        <div class="card__subtitlepac">Single Kayak Rentals</div>
        <ul className='rental__list'>
            <li className='list-inside'>First hour $35</li>
            <li className='list-inside'>Two hours $55</li>
            <li className='list-inside'>Weekday daily max $90</li>
        </ul>
        <div class="card__subtitlepac">Tandem (Double) Kayak Rentals</div>
        <ul className='rental__list'>
            <li className='list-inside'>First hour $70</li>
            <li className='list-inside'>Two hours $100</li>
        </ul>
        
      </div>
    </div>
  </li>
  <li class="cards__itempac">
    <div class="cardpac">
      <div class="card__image card__image--rental"></div>
      <div class="card__contentpac">
        <div class="card__titlepac">Kayak Rental Passes</div>
        <p class="card__textpac"> Passes can be used for single and tandem kayak rentals but
                    tandem kayaks use 2-passes. Passes can be shared with
                    immediate family members. Passes can be used any day of
                    the paddling season. Passes expire at the end of the
                    season and unused passes can not be used in any subsequent
                    season. Please email{" "}
        <a href="team@torontobeachkayak.ca">
                        team@torontobeachkayak.ca{" "}
                    </a>{" "}
        or text us at 416 629-6040 to purchase passes.</p>
        <div class="card__subtitlepac">Kayak 5-Pass (5 x 1-hr rentals)</div>
        <ul className='rental__list'>
        <li>$140 (available now!)</li>
        </ul>
        <div class="card__subtitlepac">Kayak 10-Pass (10 x 1-hr rentals)</div>
        <ul className='rental__list'>
        <li>$250 (available soon!)</li>
        </ul>
    
      </div>
    </div>
  </li>
  <li class="cards__itempac">
    <div class="cardpac">
      <div class="card__image card__image--lesson"></div>
      <div class="card__contentpac">
        <div class="card__titlepac">Kayak Lessons</div>
        <p class="card__textpac"> All lessons are one hour and include 10-20 minutes on-land
                    instruction followed by an instructor-led paddle and tour
                    of the area. Please email{" "}
        <a href="team@torontobeachkayak.ca">
                        team@torontobeachkayak.ca{" "}
        </a>{" "}
            or text us at 416 629-6040 to arrange for a lesson.</p>
                    <div class="card__subtitlepac">Private Lesson (1)</div>
        <ul className='rental__list'>
        <li>$100 pp</li>
        </ul>
        <div class="card__subtitlepac">Semi-Private Lesson (2)</div>
        <ul className='rental__list'>
        <li>$80 pp</li>
        </ul>
        <div class="card__subtitlepac">Group Lesson (3 or more)</div>
        <ul className='rental__list'>
        <li>$60 pp</li>
        </ul>
      </div>
    </div>
  </li>
</ul>

</div>
  )
}
