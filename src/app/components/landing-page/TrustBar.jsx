import React from 'react';
import './TrustBar.css';

const TrustBar = () => {
  return (
    <section className="trust-bar-container">
      {/* Left Feature */}
      <div className="trust-column">
        <h3>Transparent Billing</h3>
        <p>GPS Based Billing | No Km Tampering</p>
      </div>

      {/* Center Download CTA */}
      <div className="trust-column center-cta">
        <span className="cta-label">Download Now!</span>
        <div className="badge-row">
          <img src="/google-play-download-button.svg" alt="Google Play" className="store-badge" />
          <img src="/apple-store-download-button.svg" alt="App Store" className="store-badge" />
        </div>
      </div>

      {/* Right Feature */}
      <div className="trust-column">
        <h3>No return fare</h3>
        <p>Oneway Cab Fare | No Hidden Charges</p>
      </div>
    </section>
  );
};

export default TrustBar;