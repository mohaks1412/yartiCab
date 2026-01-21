import React from 'react';
import './FeaturesGrid.css';

const FeaturesGrid = () => {
  return (
    <section className="features-container">
      {/* Box 1: Return Fare */}
      <div className="feature-box">
        <div className="icon-wrapper">
          {/* Corrected Solid Hand Icon */}
          <img src="/helping-hand.svg" alt="Helping Hand Icon" />
        </div>
        <h3 className="feature-title">RETURN FARE, NOT FAIR!</h3>
        <p className="feature-text">
          Why Pay For Return Journey When You Are Travelling Oneway? Now Get 
          Discounted AC Taxi At Just Half Of The Round Trip Cost For Your One Way Travel.
        </p>
      </div>

      {/* Box 2: GPS Billing */}
      <div className="feature-box border-sides">
        <div className="icon-wrapper">
          {/* Corrected Location Pin with Dot */}
          <img src="/location.svg" alt="GPS Location Icon" />
        </div>
        <h3 className="feature-title">GPS BASED BILLING SYSTEM</h3>
        <p className="feature-text">
          Since The GPS Data Captures The Actual Distance And Time Travelled, 
          It Reduce The Chance Of Kilometer Tampering Or Discrepancies In Billing.
        </p>
      </div>

      {/* Box 3: Available Routes */}
      <div className="feature-box">
        <div className="icon-wrapper">
          {/* Corrected Taxi/Car Icon */}
          <img src="/driving.svg" alt="Car Icon" />
        </div>
        <h3 className="feature-title">NOW AVAILABLE ROUTES ARE!</h3>
        <p className="feature-text routes">
          Lucknow | Gorakhpur | Varanasi <br />
          | Ayodhya | Allahabad | Bareilly
        </p>
      </div>
    </section>
  );
};

export default FeaturesGrid;