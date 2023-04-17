import React from 'react'
import '../../App.css'
import "./Faq.css"

export const Faq = () => {
  return (
      
  <div class="container-faq">
    
  <h1 className='faq-title'>Frequently Asked Questions</h1>
  
  <div class="faq-drawer">
    <input class="faq-drawer__trigger" id="faq-drawer" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer">Do I have to take a lesson before I kayak with you? </label>
    <div class="faq-drawer__content-wrapper">
      <div class="faq-drawer__content">
        <p>
        No, but paddlers with limited/no paddling experience will only be permitted on calm days, 
  will be given 10-15 minutes on-land instruction and must demonstrate key skills in our bay before heading out for a paddle.
        </p>
      </div>
    </div>
  </div>
  
  <div class="faq-drawer">
    <input class="faq-drawer__trigger" id="faq-drawer-2" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-2">I don't have a reservation, can I just drop by for a kayak rental on the day?</label>
    <div class="faq-drawer__content-wrapper">
      <div class="faq-drawer__content">
        <p>
        Of course you can. However, if you are a group of paddlers we may have a difficult time accommodating you on weekday evenings
  and on weekends when we get busy so we strongly recommend making a reservation. 
        </p>
      </div>
    </div>
  </div>
  
  <div class="faq-drawer">
    <input class="faq-drawer__trigger" id="faq-drawer-3" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-3">How old does a child have to be to paddle a kayak solo?</label>
    <div class="faq-drawer__content-wrapper">
      <div class="faq-drawer__content">
        <p>
        12 years of age if accompanied out on the water by an adult paddler. Ensure waiver for the child (under 18 years) 
  is completed by Guardian. Children younger than 12 may participate by being a passenger on a kayak with experienced adult paddler.      
        </p>
      </div>
    </div>
  </div>
   
  <div class="faq-drawer">
    <input class="faq-drawer__trigger" id="faq-drawer-4" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-4">What are your operating hours?</label>
    <div class="faq-drawer__content-wrapper">
      <div class="faq-drawer__content">
        <p>
        We are open every day that the weather and conditions are suitable for paddling from June 1 until the last week of September.     
        </p>
      </div>
    </div>
  </div>
   
  <div class="faq-drawer">
    <input class="faq-drawer__trigger" id="faq-drawer-5" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-5">Can I bring my dog?</label>
    <div class="faq-drawer__content-wrapper">
      <div class="faq-drawer__content">
        <p>
        Yes but the paddler must be experienced and must request a "Regular" kayak.
    Our "Small" kayaks and "tandem" kayaks are not suitable for dog passengers.
    Please also note that we do not supply dog life-jackets. Dogs do not need to sign a waiver 😉! 
        </p>
      </div>
    </div>
  </div>
   
  <div class="faq-drawer">
    <input class="faq-drawer__trigger" id="faq-drawer-6" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-6">I have paddled with you before, do I need to sign a Waiver?</label>
    <div class="faq-drawer__content-wrapper">
      <div class="faq-drawer__content">
        <p>
        Every paddler needs to sign one waiver every season. One waiver per paddler per year!       
        </p>
      </div>
    </div>
  </div>
  
</div>
    
  )
}


{/* <div className='faq'>
<div class="container-faq">
  
 
<details>
  <summary>Can I bring my dog?</summary>
  <div>
    Yes but the paddler must be experienced and must request a "Regular" kayak.
    Our "Small" kayaks and "tandem" kayaks are not suitable for dog passengers.
    Please also note that we do not supply dog life-jackets. Dogs do not need to sign a waiver 😉!
  </div>
</details>
<details>
  <summary>I have paddled with you before, do I need to sign a Waiver?</summary>
  <div>
  Every paddler needs to sign one waiver every season. One waiver per paddler per year!
  </div>
</details>
</div>
    </div> */}