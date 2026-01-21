import React from 'react';
import './CarRentalBenefits.css';

const CarRentalBenefits = () => {
  const benefits = [
    {
      title: "Skilled Chauffeurs",
      text: "Our experienced and courteous drivers ensure a safe, comfortable, and stress-free ride. Whether you need a taxi service, outstation car rental, or oneway cab, they are adept at navigating India's roads for a seamless travel experience."
    },
    {
      title: "Dedicated Oneway Cab Service",
      text: "We offer specialized oneway car rental services across India, allowing you to pay only for the distance you travel. This makes intercity trips with Yatri Car Rental both cost-effective and convenient."
    },
    {
      title: "Well-Maintained Car Rental Fleet",
      text: "Our fleet of rental cars in India is kept in top condition, ensuring you enjoy a comfortable and secure ride, whether you opt for a car hire, taxi service, or outstation car rental."
    },
    {
      title: "Transparent Pricing for Car Hire",
      text: "Our GPS-based billing system ensures fair pricing by eliminating any chances of Kilometer tampering by the driver. With real-time distance measurement and live location tracking, you get transparency and peace of mind when using our car rental services."
    },
    {
      title: "24/7 Customer Support for Car Rentals",
      text: "Our customer care team is available round the clock to assist with any inquiries or concerns regarding your car hire, taxi service, or outstation car rental, ensuring a smooth and enjoyable experience throughout your journey in India."
    }
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-header">
        CAR RENTAL IN INDIA – BOOK RELIABLE VEHICLES FOR ALL YOUR NEEDS
      </div>
      <div className="benefits-body">
        <p className="intro-text">
          Choosing a chauffeur-driven car rental over a self-drive Car Hire option in India offers several benefits with Yatri Car Rental:
        </p>
        <ol className="benefits-list">
          {benefits.map((benefit, index) => (
            <li key={index} className="benefit-item">
              <strong>{index + 1}. {benefit.title}:</strong> {benefit.text}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default CarRentalBenefits;