import React from 'react'
import "./OurKayaks.css"
export const OurKayaks = () => {
  return (
    <div className='ourkayaks'>
        <h1 className='title__topka'>Our Kayaks</h1>
        <ul class="cardskayaks">
  <li class="cards__itemka">
    <div class="cardka">
      <div class="card__image card__image--kaya"></div>
      <div class="card__contentka">
        <div class="card__titleka">Single Kayak - Regular</div>
        <p class="card__textka"> Our Canadian-made extremely stable kayak with a very large
            "over-sized" cockpit opening making it easy to enter/exit/launch.
            Maximum capacity is 350 lb (158 kg). Our regular sized kayak is
            perfect for: </p>
            <ul className="card_kalist">
                <li className='list-inside'>Beginners wanting more stability</li>
                <li className='list-inside'>Large individuals</li>
                <li className='list-inside'>Individuals with small children (under 6yrs)</li>
                <li className='list-inside'>Individuals with pets </li>
            </ul>
      </div>
    </div>
  </li>
  <li class="cards__itemka">
    <div class="cardka">
      <div class="card__image card__image--small"></div>
      <div class="card__contentka">
        <div class="card__titleka">Single Kayak - Small</div>
        <p class="card__textka"> Our Canadian-made very stable kayak with a very large cockpit
              opening. Maximum capacity is 275 lb (124 kg). Our small kayak is
              ideal for:</p>
                <ul className="card_kalist">
                    <li className='list-inside'>Experienced paddlers wanting a more nimble ride</li>
                    <li className='list-inside'>Smaller adults</li>
                    <li className='list-inside'>Teenagers</li>
                </ul>
      </div>
    </div>
  </li>
  <li class="cards__itemka">
    <div class="cardka">
      <div class="card__image card__image--kid"></div>
      <div class="card__contentka">
        <div class="card__titleka">Tandem (2-person) Kayaks</div>
        <p class="card__textka">We have three sit-on-top (self-draining), super stable tandem
                kayaks. As sit-on-top kayaks they are a "wet" ride so be prepared
                for some splash and a wet seat. The capacity is 226 kg (500 lb).
                The tandem kayak is suitable for:</p>
                <ul>
                    <li className='list-inside'>
                        Groups of 2 where one person is unable/not wanting to paddle
                        solo
                    </li>
                    <li className='list-inside'>Two adult paddlers and one small child (passenger)</li>
                </ul>
      </div>
    </div>
  </li>
</ul>
    </div>
  )
}
