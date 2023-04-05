import React from "react";
import "./WeatherTable.css";

export const WeatherTable = () => {
  return (
    <div className="weather-container">
      <section className="weather-sec">
        <header>Planning your Trip</header>
        <div className="planning">
          <h4>The trip planning estimates in the tables below assume:</h4>
          <ol>
            <li>
              Easy paddling conditions(light current, little chop, low wind) in
              both directions
            </li>
            <li>You are reasonably fit</li>
            <li>You are paddling with some effort</li>
            <li>You will not be stopping (trip times are paddling times)</li>
          </ol>
        </div>
        <div className="planning2">
          <h4>If conditions are difficult (wind/waves/current):</h4>
          <ol>
            <li>
              Always head into the adversity -into the wind and chop so you have
              an easier paddle home
            </li>
            <li>
              For estimating time downgrade your ability on the chart (e.g
              intermediates become beginners)
            </li>
          </ol>
        </div>

        <h1 className="weather-title">Heading East (turing left)</h1>

        <div className="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>Ability(speed)</th>
                <th>Leuty Lifeguard Station (0.2km)</th>
                <th>Balmy Beach Club (1.2km)</th>
                <th>Rc Harris WTP (2.0km)</th>
                <th>Secret Beaches (2.3km)</th>
                <th>Bluffers Park Beach (9.0km)</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table >
            <tbody>
              <tr>
                <td data-label="Ability(Speed)">Beginner (3km/hr)</td>
                <td data-label="Leuty Lifeguard Station (0.2km)">5min/10min return </td>
                <td data-label="Balmy Beach Club (1.2km)">20min/40min return</td>
                <td data-label="Rc Harris WTP (2.0km)">40min/80min return</td>
                <td data-label="Secret Beaches (2.3km)">50min/100min return</td>
                <td data-label="Bluffers Park Beach (9.0km)"> 3hr/7hr return</td>
              </tr>
              <tr>
                <td data-label="Ability(Speed)">Intermediate (5km/hr)</td>
                <td data-label="Leuty Lifeguard Station (0.2km)">2min/5min return</td>
                <td data-label="Balmy Beach Club (1.2km)">15min/30min return</td>
                <td data-label="Rc Harris WTP (2.0km)">25min/50min return</td>
                <td data-label="Secret Beaches (2.3km)">30min/60min return</td>
                <td data-label="Bluffers Park Beach (9.0km)">2hr//4.5hr return</td>
              </tr>
              <tr>
                <td data-label="Ability(Speed)">Advanced (9km/hr)</td>
                <td data-label="Leuty Lifeguard Station (0.2km)">2min/4min return</td>
                <td data-label="Balmy Beach Club (1.2km)">8min/16min return</td>
                <td data-label="Rc Harris WTP (2.0km)">15min/30min return</td>
                <td data-label="Secret Beaches (2.3km)">20min/40min return</td>
                <td data-label="Bluffers Park Beach (9.0km)">1hr/2.5hr return</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="weather-sec">
        <h1 className="weather-title">Heading West (turing right)</h1>

        <div className="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>Ability(speed)</th>
                <th>End of Main Beach (750m)</th>
                <th>Secret Beach (1.75km)</th>
                <th>Leslie Street Spit (2.5km)</th>
                <th>Tip of Spit (LightHouse) (7.5km)</th>
                <th>Toronto Island (9.5km)</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr>
                <td data-label="Ability(Speed)">Beginner (3km/hr)</td>
                <td data-label="End of Main Beach (750m)">15min/30min return </td>
                <td data-label="Secret Beach (1.75km)">40min/1.5hr return</td>
                <td data-label="Leslie Street Spit (2.5km)">50min/2hr return</td>
                <td data-label="Tip of Spit (LightHouse) (7.5km)"> - </td>
                <td data-label="Toronto Island (9.5km)"> - </td>
              </tr>
              <tr>
                <td data-label="Ability(Speed)">Intermediate (5km/hr)</td>
                <td data-label="End of Main Beach (750m)">10min/20min return</td>
                <td data-label="Secret Beach (1.75km)">30min/1hr return</td>
                <td data-label="Leslie Street Spit (2.5km)">30min/1.2hr return</td>
                <td data-label="Tip of Spit (LightHouse) (7.5km)">1.5hr/3.25hr return</td>
                <td data-label="Toronto Island (9.5km)">2hr//4.5hr return</td>
              </tr>
              <tr>
                <td data-label="Ability(Speed)">Advanced (9km/hr)</td>
                <td data-label="End of Main Beach (750m)">5min/10min return</td>
                <td data-label="Secret Beach (1.75km)">15min/35min return</td>
                <td data-label="Leslie Street Spit (2.5km)">20min/45min return</td>
                <td data-label="Tip of Spit (LightHouse) (7.5km)">50min/2hr return</td>
                <td data-label="Toronto Island (9.5km)">1.5hr/3.5hr return</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
