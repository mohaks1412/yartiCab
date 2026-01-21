import React from 'react';
import './BookingPortal.css';
import BookingForm from '../BookingForm/BookingCard';

const BookingPortal = () => {
  return (
    <div className="booking-portal-wrapper">
      <div className="portal-container">
        
        <div className="portal-message">
          <h1>
            INDIA'S <span className="highlight-green">LEADING</span> <br />
            <span className="highlight-green">ONE WAY INTERCITY</span> <br />
            CAB SERVICE PROVIDER
          </h1>
        </div>

        {/* Right Side: The Form Dock */}
        <div className="booking-form-dock">
          <BookingForm/>
        </div>
      </div>
    </div>
  );
};

export default BookingPortal;