import React from 'react';
import './InfoSection.css'; // Ensure the path is correct

const InfoSection = () => {
  const points = [
    "Experience The Thrill Of Road Travel With Our Reliable Car Rental And Taxi Service As We Explore The Diverse Landscapes Of India Together. We're Passionate About Making Car Hire Accessible And Enjoyable For Everyone.",
    "Instead Of Worrying About The Road, Relax In Our Chauffeur-Driven Cabs On Your Next Vacation. With A Presence In Over 2000 Cities Across India, We're Here To Take You Wherever Your Heart Desires With Our Luxury Car Rental Services.",
    "We Cherish The Freedom To Stop, Breathe In The Fresh Air, Immerse In Local Cultures, And Savor Regional Cuisines Along The Way. These Moments Of Discovery Enrich Your Travels And Create Lasting Memories Through Our Rent A Car Service.",
    "No Destination Is Too Far Or Too Close; We Encourage You To Explore The Beauty Around You With Our Car Hire Options. Pack Your Bags, Set Out On Weekend Adventures, And Uncover The Gems In Your Vicinity With Our Taxi Service.",
    <span>
      Planning Your Trip Is A Breeze With Our User-Friendly Website, Or You Can Chat With Our Travel Experts At <strong className="phone-number">7860663399</strong> For Personalized Guidance On Car Rental. Our Cab Booking App Simplifies The Process, Ensuring A Hassle-Free Experience When You Rent A Car.
    </span>,
    "Our Experienced Drivers Are Your Companions On The Road, Guiding You Through India's Best Experiences With Our Car Rental And Taxi Service. From Booking To Your Safe Return Home, We're Dedicated To Ensuring You Have An Exceptional Road Trip."
  ];

  return (
    <div className="info-container">
      <div className="info-header">
        <h2>
          Exploring India's Amazing Landscapes, From The Mountains To The Beaches,
          <br className="header-br" /> One Memorable Road Trip At A Time
        </h2>
      </div>

      <div className="info-body">
        <ul className="info-list">
          {points.map((point, index) => (
            <li key={index} className="info-item">
              <span className="custom-bullet" />
              <p className="info-text">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoSection;