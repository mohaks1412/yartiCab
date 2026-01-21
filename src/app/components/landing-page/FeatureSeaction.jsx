import React from 'react';
import './FeatureSection.css';

const FeatureSection = () => {
  const features = [
    {
      title: "For Any Budget",
      desc: "Choose from Hatchbacks, Sedans, Mini SUVs, Prime SUVs, and Mini Buses like Tempo Travellers 12-Seater to 25-Seater to find a ride within your budget and at your convenience with our Car Rental and Cab Service options.",
      icon: "for-any-budget.svg" 
    },
    {
      title: "For Any Distance",
      desc: "Book daily rides with multiple stops within the city or travel to your favorite destinations across the country with our Oneway or Round Trip Outstation Cab Service. Enjoy seamless cab booking for all your travel needs.",
      icon: "for-any-distance.svg"
    },
    {
      title: "For Any Duration",
      desc: "Plan a day out with our hourly-based packages for local city tours or book our car rental services with a driver for long or multiple-day trips. Our taxi service ensures reliable transportation tailored to your car hire needs.",
      icon: "for-any-duration.svg"
    }
  ];

  const points = [
    "Experience The Thrill Of Road Travel With Our Reliable Car Rental And Taxi Service As We Explore The Diverse Landscapes Of India Together.",
    "Instead Of Worrying About The Road, Relax In Our Chauffeur-Driven Cabs On Your Next Vacation. With A Presence In Over 2000 Cities Across India.",
    "We Cherish The Freedom To Stop, Breathe In The Fresh Air, Immerse In Local Cultures, And Savor Regional Cuisines Along The Way.",
    "No Destination Is Too Far Or Too Close; We Encourage You To Explore The Beauty Around You With Our Car Hire Options.",
    <span>Planning Your Trip Is A Breeze With Our User-Friendly Website, Or You Can Chat With Our Travel Experts At <strong style={{color: '#000'}}>7860663399</strong>.</span>,
    "Our Experienced Drivers Are Your Companions On The Road, Guiding You Through India's Best Experiences With Our Car Rental And Taxi Service."
  ];

  return (
    <div className="info-section-wrapper">
      
      
      <div className="features-grid">
        {features.map((item, index) => (
          <div key={index} className="feature-card">
            <div className="icon-wrapper">
               <img className="icon" src={item.icon} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>


      <div className="info-card">
        <div className="info-header">
          <h2>
            Exploring India's Amazing Landscapes, From The Mountains To The Beaches,
            <br className="hidden md:block" /> One Memorable Road Trip At A Time
          </h2>
        </div>

        <div className="info-body">
          <ul className="info-list">
            {points.map((point, index) => (
              <li key={index} className="info-item">
                <span className="custom-bullet" />
                <p className="info-text">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default FeatureSection;