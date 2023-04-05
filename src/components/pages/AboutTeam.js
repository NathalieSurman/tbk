import React from 'react'
import "./AboutTeam.css"

export const AboutTeam = () => {
return (
    <div className='container-team'>
    <div class="main-div">
  <h1 className='aboutteam-title'>Our Team</h1>
  <ul class="cards-ul">
    <li class="cards_item">
        <div class="card">
        <div class="card_image"><img src="https://picsum.photos/500/300/?image=10" alt='' className='people-img'/></div>
        <div class="card_content">
            <h2 class="card_title">Jane Doe</h2>
            <p class="card_text">CEO & Founder</p>
            <p class="card_text">Some text that describes me lorem ipsum ipsum lorem.</p>
        
        </div>
        </div>
    </li>
    <li class="cards_item">
        <div class="card">
        <div class="card_image"><img src="https://picsum.photos/500/300/?image=5" alt='' className='people-img'/></div>
        <div class="card_content">
        <h2 class="card_title">Mike Ross</h2>
            <p class="card_text">Art Director</p>
            <p class="card_text">Some text that describes me lorem ipsum ipsum lorem.</p>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="https://picsum.photos/500/300/?image=11" alt='' className='people-img'/></div>
        <div class="card_content">
        <h2 class="card_title">John Doe</h2>
          <p class="card_text">Designer</p>
          <p class="card_text">Some text that describes me lorem ipsum ipsum lorem.</p>
        </div>
        </div>
    </li>

  </ul>
</div>
</div>

  )
}
