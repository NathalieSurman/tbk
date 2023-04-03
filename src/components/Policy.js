import React from 'react'

import "./Policy.css"

export const Policy = () => {
  return (
    <div class="container">
    
    <h1>Policy</h1>
    
    <div class="faq-drawer">
      <input class="faq-drawer__trigger" id="faq-drawer" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer">PETS </label>
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
          <p>
          We are pet friendly. Our regular (not small) single kayaks provide plenty of cockpit space for pet passengers.
    Please note that we do not provide life jackets for your furry friends.. 
          </p>
        </div>
      </div>
    </div>
    
    <div class="faq-drawer">
      <input class="faq-drawer__trigger" id="faq-drawer-2" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-2">CLOTHING</label>
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
          <p>
          For safety reasons we will not rent kayaks to persons wearing dresses/skirts/robes that fall below the knee. 
          </p>
        </div>
      </div>
    </div>
    
    <div class="faq-drawer">
      <input class="faq-drawer__trigger" id="faq-drawer-3" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-3">CANCELLATION & WEATHER GUARANTEE</label>
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
          <p>
          All reservations cancelled with 24-hour notice and/or cancelled due to 
        unsafe or unpleasant paddling conditions will be rescheduled or fully refunded.           
          </p>
        </div>
      </div>
    </div>

    <div class="faq-drawer">
      <input class="faq-drawer__trigger" id="faq-drawer-4" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-4">AGE RESTRICTIONS</label>
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
          <p>
          Only persons 18 years and over can sign a waiver. Persons under 18 must have a waiver signed by a
    parent or guardian who is over 18 years of age. Paddlers under 18 years of age must be accompanied on the water 
    by an adult paddler over 18 years of age. Experienced paddlers under 18 years of age MAY paddle in our restricted beach zone 
    but only if they can demonstrate strong paddling skills and the water is calm and wind is low..            
          </p>
        </div>
      </div>
    </div>
    
  </div>

  )
}



{/* <TopDiv>
<Title>Policies</Title>
<Content>
<FigureImg>
<Img src="./images/dog.jpg" />
</FigureImg>
<Box>

<Description>
<div className='text'>
    <h2>PETS</h2>
    <p>We are pet friendly. Our regular (not small) single kayaks provide plenty of cockpit space for pet passengers.
    Please note that we do not provide life jackets for your furry friends. </p>
</div>
<div className='text'>
    <h2>CLOTHING</h2>
    <p>For safety reasons we will not rent kayaks to persons wearing dresses/skirts/robes that fall below the knee. </p>
</div>
<div className='text'>
    <h2>CANCELLATION & WEATHER GUARANTEE</h2>
    <p>All reservations cancelled with 24-hour notice and/or cancelled due to 
        unsafe or unpleasant paddling conditions will be rescheduled or fully refunded.</p>
</div>
<div className='text'>
    <h2>AGE RESTRICTIONS</h2>
    <p>Only persons 18 years and over can sign a waiver. Persons under 18 must have a waiver signed by a
    parent or guardian who is over 18 years of age. Paddlers under 18 years of age must be accompanied on the water 
    by an adult paddler over 18 years of age. Experienced paddlers under 18 years of age MAY paddle in our restricted beach zone 
    but only if they can demonstrate strong paddling skills and the water is calm and wind is low.. </p>
</div>
</Description>
</Box>

</Content>
</TopDiv> */}