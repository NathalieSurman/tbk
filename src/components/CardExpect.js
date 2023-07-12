import React from 'react'
import "./CardExpect.css"

export const CardExpect = () => {
return (
    <div className='cardexpect'>
         <h1 class="card__titleExpecttop">What to Expect</h1>
        <ul class="cardsexpext">
        <li class="cards__itemex">
        <div class="cardex">
            <div class="card__image card__image--feet"></div>
            <div class="card__contentexp">
            <div class="card__titleex">Basic Requirements</div>
            <ul className='list-exp'>
            <li className='list-inside'>
            All renters 18 years of age or older must sign a Waiver (one per season). Minors must have Waiver signed by a parent/guardian
            </li>
            <li className='list-inside'>Complete the on-line waiver BEFORE you come to the beach to eliminate unnecessary delays!</li>
            <li className='list-inside'>
            All first-time renters will be assessed for paddling abilities
            Renters will need to demonstrate boat stability & control (e.g. going in a straight line, turning & stopping)
            </li>
            <li className='list-inside'>{' '}
            <a href="https://www.acls.net/first-aid-for-unconscious-person" target="_blank" rel="noopener noreferrer">Click here for a first-aid procedure reminder</a> </li>
        </ul>
            </div>
        </div>
        </li>
        <li class="cards__itemex">
        <div class="cardex">
            <div class="card__image card__image--rr"></div>
            <div class="card__contentexp">
            <div class="card__titleex">What to Wear, What to Bring</div>
            <ul className='list-exp'>
            <li className='list-inside'>
            Clothing that lets you move or simply a bathing suit
            </li>
            <li className='list-inside'>
            Bottoms you don't mind getting wet and/or dry quickly
            </li>
            <li className='list-inside'>
            Water sandals (most people go barefoot)
            </li>
            <li className='list-inside'>
            Hat, sunscreen, sunglasses
            </li>
            <li className='list-inside'>
            Ziplock or dry bag to protect phone & valuables when on the water
            </li>
            <li className='list-inside'>
            Though we provide all safety equipment, please feel free to bring your own lifejacket
            </li>
            <li>We are pet-friendly but do not provide life-jackets for pets</li>
            
        </ul>
            </div>
        </div>
        </li>
        <li class="cards__itemex">
        <div class="cardex">
            <div class="card__image card__image--people"></div>
            <div class="card__contentexp">
            <div class="card__titleex">First time paddling with Us?</div>
            <ul className='list-exp'>
            <li className='list-inside'>
            Remember traffic and parking can be difficult so plan your trip accordingly
            </li>
            <li className='list-inside'>
            We have a storage shed where you may leave your belongings when you are out on the water
            (we do not have secure lockers so leave valuables behind)
            </li>
            <li className='list-inside'>You will be provided on-land orientation and basic refresher paddling instructions</li>
            <li className='list-inside'>You will need to demonstrate some key skills including boat stability,
                control, paddling a straight line, turning and stopping before heading out on the lake</li>
        </ul>
            
            </div>
        </div>
        </li>
        
    </ul>
</div>
)
}
