import React from "react";

import "./ViewOurKayaks.css";

export const ViewOurKayaks = () => {
  return (
    
    <div class="c"> 
      <div className="card-box">
        <h1 className="ViewKayakHeader">Our Kayaks</h1>
        <div class="cardkayak">
          <img class="img-c" src="/images/RegularKayak.jpg" alt=""></img>
          <div class="card-cont">
            <h2 className="TypeKayak">Single Kayak - Regular</h2>

            <p class="excerpt">
              Our Canadian-made extremely stable kayak with a very large
              "over-sized" cockpit opening making it easy to enter/exit/launch.
              Maximum capacity is 350 lb (158 kg). Our regular sized kayak is
              perfect for:
            </p>
            <ul>
              <li>Beginners wanting more stability</li>
              <li>Large individuals</li>
              <li>Individuals with small children (under 6yrs)</li>
              <li>Individuals with pets </li>
            </ul>
          </div>
        </div>

        <div class="cardkayak">
          <img class="img-c" src="/images/smallKayak.jpg" alt=""></img>
          <div class="card-cont">
            <h2 className="TypeKayak">Single Kayak - Small</h2>

            <p class="excerpt">
              Our Canadian-made very stable kayak with a very large cockpit
              opening. Maximum capacity is 275 lb (124 kg). Our small kayak is
              ideal for:
            </p>
            <ul>
              <li>Experienced paddlers wanting a more nimble ride</li>
              <li>Smaller adults</li>
              <li>Teenagers</li>
            </ul>
          </div>
        </div>

        <div class="cardkayak">
          <img class="img-c" src="/images/two.jpg" alt=""></img>
          <div class="card-cont">
            <h2 className="TypeKayak">Tandem (2-person) Kayaks</h2>

            <p class="excerpt">
              We have three sit-on-top (self-draining), super stable tandem
              kayaks. As sit-on-top kayaks they are a "wet" ride so be prepared
              for some splash and a wet seat. The capacity is 226 kg (500 lb).
              The tandem kayak is suitable for:
            </p>
            <ul>
              <li>
                Groups of 2 where one person is unable/not wanting to paddle
                solo
              </li>
              <li>Two adult paddlers and one small child (passenger)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
