'use client'

import { useBooking } from '@/app/app/hooks/useBooking';
import './TripTypeToggle.css';

export default function TripTypeToggle() {
  const { tripType, handleTripTypeChange } = useBooking();

  return (
    <div className="trip-type-selector">
        <label className={`trip-option ${tripType === 'one-way' ? 'active' : ''}`}>
            <input 
            type="radio" 
            name="tripType" 
            checked={tripType === 'one-way'} 
            onChange={() => handleTripTypeChange('one-way')} 
            />
            <span className="radio-dot"></span>
            One Way
        </label>

        <label className={`trip-option ${tripType === 'round-trip' ? 'active' : ''}`}>
            <input 
            type="radio" 
            name="tripType" 
            checked={tripType === 'round-trip'} 
            onChange={() => handleTripTypeChange('round-trip')} 
            />
            <span className="radio-dot"></span>
            Round Trip
        </label>
    </div>
  );
}
