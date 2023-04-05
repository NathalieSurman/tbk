import React from 'react'
import '../../App.css'
import "./Faq.css"

export const Faq = () => {
  return (
    <div className='faq'>
<div class="container-faq">
  <h1 className='faq-title-top'>Frequently Asked Questions</h1>
  <details>
  <summary>Do I have to take a lesson before I kayak with you? </summary>
  <div>
  No, but paddlers with limited/no paddling experience will only be permitted on calm days, 
  will be given 10-15 minutes on-land instruction and must demonstrate key skills in our bay before heading out for a paddle.
  </div>
</details>
<details>
  <summary>I don't have a reservation, can I just drop by for a kayak rental on the day?  </summary>
  <div>
  Of course you can. However, if you are a group of paddlers we may have a difficult time accommodating you on weekday evenings
  and on weekends when we get busy so we strongly recommend making a reservation. 
  </div>
</details>
<details>
  <summary>How old does a child have to be to paddle a kayak solo?</summary>
  <div>
  12 years of age if accompanied out on the water by an adult paddler. Ensure waiver for the child (under 18 years) 
  is completed by Guardian. Children younger than 12 may participate by being a passenger on a kayak with experienced adult paddler.
  </div>
</details>
<details>
  <summary>What are your operating hours?</summary>
  <div>
  We are open every day that the weather and conditions are suitable for paddling from June 1 until the last week of September. 

We are generally open from 9am until 30minutes before sunset (7:30-8:30pm) but we will open earlier for small groups. Just ask us!
  </div>
</details>
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
    </div>
  )
}
