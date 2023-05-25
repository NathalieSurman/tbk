import React from "react";
import "./AboutTeam.css";

export const AboutTeam = () => {
  return (
    <div className="container-team">
      <div class="main-div">
        <h1 className="aboutteam-title">Our Team</h1>
        <ul class="cards-ul">
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="/images/lousi.jpg" alt="" className="people-img" />
              </div>
              <div class="card_content">
                <h2 class="card_title">Louis</h2>
                <p class="card_text">Owner</p>
                <p class="card_text">
                  Louis is a student of environmental science and a talented
                  athlete with strong paddling & climbing skills. Louis is the
                  king of customer service and loves nothing more than helping
                  customers get the most out of their paddling experience. He
                  even gives great customer service in french!
                </p>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="/images/Moran.jpg" alt="" className="people-img" />
              </div>
              <div class="card_content">
                <h2 class="card_title">Moran</h2>
                <p class="card_text">Instructor</p>
                <p class="card_text">
                  Moran is a former competitive swimmer, lifeguard and swim
                  instructor and has been kayaking as long as she can remember.
                  Currently she is enrolled in chiropractic college. During the
                  summer you may catch her swimming along our shoreline or on
                  the water instructing.
                </p>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="/images/Jess.jpg" alt="" className="people-img" />
              </div>
              <div class="card_content">
                <h2 class="card_title">Jess</h2>
                <p class="card_text">Founder</p>
                <p class="card_text">
                In 2016, she teamed up with WSUP Toronto,
                establishing the first-ever kayak rental business in Toronto's captivating east beaches.
                While she has bid farewell to her role at Toronto Beach Kayak, her legacy continues to inspire water enthusiasts in the city.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
