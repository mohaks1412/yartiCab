import React from 'react';
import './OneWayJourney.css';

const OneWayJourney = () => {
  return (
    <section className="oneway-section">
      <div className="oneway-content">
        <h2 className="oneway-heading">
          WHY CHOOSE AC BUS OR AC TRAIN
          FOR YOUR <span className="highlight-green">ONE-WAY JOURNEY?</span>
        </h2>
        <p className="oneway-description">
          Our Oneway Car Rental Service Is Cheaper Than AC Bus And 2-Tier AC 
          Train Ticket Fares. It Reduces Your Travel Time, And You Travel In Your 
          Own Private Space, Allowing You To Fully Enjoy Your Journey. Our One 
          Way Taxi Will Come To Your Doorstep And Take You To Your Desired 
          Destination. So, Book Your Cheapest One Way Cab From Lucknow To 
          Gorakhpur Or Varanasi To Ayodhya With Our Reliable Oneway Car Rental 
          Service With Driver. Experience The Convenience Of Our Taxi Service, 
          Where You Can Rent A Car Effortlessly And Enjoy Seamless Cab Booking. 
          Choose Our Car Hire Option For A Hassle-Free And Comfortable Travel 
          Experience. We Offer Outstation Cab And Intercity Travel Services, 
          Ensuring A Smooth And Enjoyable Luxury Ride Wherever You Need To Go.
        </p>
      </div>
      <div className="oneway-graphic">
        {/* Replace with your actual illustration/SVG path */}
        <img src="one-way-drive.svg" alt="Taxi Booking Illustration" className="illustration-img" />
      </div>
    </section>
  );
};

export default OneWayJourney;