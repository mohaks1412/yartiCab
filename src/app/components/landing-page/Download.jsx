import React from 'react';
import './Download.css';

const Download = () => {
  return (
    <div className="download-section-wrapper">
      <div className="download-flex-container">
        
        {/* Left Side: Get App */}
        <div className="app-download-col">
          <div className="phones-visual">
            <img src="/phones.svg" alt="Yatri Cabs App on Phone" />
          </div>
          <div className="download-text-content">
            <h2>
              Get Your <br />
              <span className="brand-green">Yatri Cabs</span> <br />
              App Now!
            </h2>
            <p className="promo-text">
              Use Code <strong>WELCOMEYATRI</strong> and <br />
              Get <strong>Flat 05% OFF*</strong> on your first <br />
              intercity ride
            </p>
            <span className="download-btns-label">Download Now!</span>
            <div className="store-buttons">
              <img src="/google-play-download-button.svg" alt="Get it on Google Play" />
              <img src="/apple-store-download-button.svg" alt="Download on the App Store" />
            </div>
          </div>
        </div>

        {/* Center Divider */}
        <div className="section-divider"></div>

        {/* Right Side: Driver Partner */}
        <div className="driver-partner-col">
          <h2>Become A <span className="brand-green">Driver</span> Partner</h2>
          <p className="driver-description">
            Join <strong className="brand-green">Yatri Car Rental</strong> And Attach Your Car To Our Platform. 
            Earn More By Serving Our Passengers And Benefit From Our Extensive Customer Base.
          </p>
          <button className="download-app-btn">Download The App</button>
        </div>

      </div>
    </div>
  );
};

export default Download;