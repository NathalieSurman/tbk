import React from 'react'

import "./Policy.css"

export const Policy = () => {
  return (
    <div class="container-policy">
    
    <h1 className='policy-title'>Policy</h1>
    
    <div class="policy-drawer">
      <input class="policy-drawer__trigger" id="policy-drawer" type="checkbox" /><label class="policy-drawer__title" for="policy-drawer">PETS </label>
      <div class="policy-drawer__content-wrapper">
        <div class="policy-drawer__content">
          <p>
          We are pet friendly. Our regular (not small) single kayaks provide plenty of cockpit space for pet passengers.
    Please note that we do not provide life jackets for your furry friends.. 
          </p>
        </div>
      </div>
    </div>
    
    <div class="policy-drawer">
      <input class="policy-drawer__trigger" id="policy-drawer-2" type="checkbox" /><label class="policy-drawer__title" for="policy-drawer-2">CLOTHING</label>
      <div class="policy-drawer__content-wrapper">
        <div class="policy-drawer__content">
          <p>
          For safety reasons we will not rent kayaks to persons wearing dresses/skirts/robes that fall below the knee. 
          </p>
        </div>
      </div>
    </div>
    
    <div class="policy-drawer">
      <input class="policy-drawer__trigger" id="policy-drawer-3" type="checkbox" /><label class="policy-drawer__title" for="policy-drawer-3">CANCELLATION & WEATHER GUARANTEE</label>
      <div class="policy-drawer__content-wrapper">
        <div class="policy-drawer__content">
          <p>
          All reservations cancelled with 24-hour notice and/or cancelled due to 
        unsafe or unpleasant paddling conditions will be rescheduled or fully refunded.           
          </p>
        </div>
      </div>
    </div>

    <div class="policy-drawer">
      <input class="policy-drawer__trigger" id="policy-drawer-4" type="checkbox" /><label class="policy-drawer__title" for="policy-drawer-4">AGE RESTRICTIONS</label>
      <div class="policy-drawer__content-wrapper">
        <div class="policy-drawer__content">
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



