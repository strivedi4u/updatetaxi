import React from 'react';
import taxi from '../assets/images/taxi.png';


// Add any necessary CSS file for styles

const MainContent = () => {
  return (
    <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {/* Left Content */}
              <div className="col-lg-6 align-self-center">
                <div className="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                  <h6>Welcome to Taxi Rental System</h6>
                  <h2>Reliable  <em>Rides,</em> &amp; <span>Anytime,</span> Anywhere</h2>
                  <p>
                    This taxi rental system is exclusively developed for MSIL, ensuring efficient and reliable transportation tailored to our business needs.
                    {/* <a rel="nofollow" href="https://templatemo.com/page/1" target="_parent">TemplateMo</a>. */}

                  </p>
                  <form id="search" action="#" method="GET">
                    <fieldset>
                      <input
                        type="text"
                        name="address"
                        className="email"
                        placeholder="Your website URL..."
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <button type="submit" className="main-button">Book Now</button>
                    </fieldset>
                  </form>
                </div>
              </div>

              {/* Right Image */}
              <div className="col-lg-6" style={{ marginTop: -80 }}>
                <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                  <img src={taxi} alt="team meeting" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
