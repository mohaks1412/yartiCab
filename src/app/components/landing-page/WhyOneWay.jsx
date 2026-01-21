import React from 'react';
import './WhyOneWay.css';

const WhyOneWay = () => {
  const leftPoints = [
    "Instant Booking & Confirmation",
    "Confirmed Booking Immediately",
    "No Return Fare For One-Way Trip",
    "Clean & Professional Cab Services",
    "Transparent Billing With GPS Based Billing System"
  ];

  const rightPoints = [
    "Pick-Up From Your House",
    "Dedicated Cab Just For You",
    "Drop To Your Desired Destination",
    "Completed More Than 20,000+ Oneway Trips",
    "Multiple Payment Option Including Credit Card."
  ];

  return (
    <section className="why-oneway-container">
      <h2 className="section-title">WHY CHOOSE ONE WAY CAB?</h2>
      
      <div className="oneway-main-content">
        <div className="feature-card">
          <ul>
            {leftPoints.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
        </div>

        <div className="center-illustration">
          <img src="/little-car.svg" alt="One Way Journey" />
        </div>

        <div className="feature-card">
          <ul>
            {rightPoints.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
        </div>
      </div>

      <div className="bottom-promo">
        DISCOVER AFFORDABLE TRAVEL WITH OUR SEAMLESS <span className="green-text">INTERCITY CAR RENTAL</span> IN INDIA – WHERE EXCELLENCE MEETS AFFORDABILITY WITH STANDARDIZED RATES IN EVERY CITY. UNLEASH YOUR JOURNEY!
      </div>
    </section>
  );
};

export default WhyOneWay;