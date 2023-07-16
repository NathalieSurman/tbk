import React from 'react'
import "./WeatherLinks.css"


export const WeatherLinks = () => {
    return (
        <div className='wlq-container'>
<ul className="cards--ul">
  <li className="cards__item">
    <div className="card-d">
      <div className="card__image card__image--fence"></div>
      <div className="card__content">
        <div className="card__title">Weather & Weather Guarantee</div>
        <p className="card__text"> Water & air temperature, wind strength & direction, and wave height
		all play a big role in the safety and enjoyment of being on the water. </p>
		<h4 className='wlq-subtitle'>Our weather guarantee: </h4>
		<p className="card__text">
All reservations cancelled with 24-hour notice and/or cancelled due to unsafe or 
unpleasant paddling conditions will be rescheduled or fully refunded</p>
        <button class="infor-btn"><a href='https://www.windfinder.com/forecast/ashbridges_bay_point' className='a-info' target="_blank" rel="noopener noreferrer">Read More</a></button>
      </div>
    </div>
  </li>
  <li className="cards__item">
    <div className="card-d">
      <div className="card__image card__image--river"></div>
      <div className="card__content">
        <div className="card__title">Water Quality Information</div>
        <p className="card__text">Our beaches are proudly Blue Flag which means they conform to the Blue Flag International standard for 4 categories.
		 During the summer, the water quality at our beach is tested daily and the results are posted.</p>
		<h4 className='wlq-subtitle'>The Blue Flag International standard for 4 categories:</h4>
		<p className="card__text">
		Environmental Education & Information; Water Quality; Environmental Management; and Safety & Services.</p>
        <button className="infor-btn"><a href='https://www.toronto.ca/community-people/health-wellness-care/health-inspections-monitoring/swimsafe/beach-water-quality/#inspection_details/9' className='a-info' target="_blank" rel="noopener noreferrer">Read More</a></button>
      </div>
    </div>
  </li>
 
</ul>
</div>
    )
}
