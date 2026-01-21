'use client'
import "./BookingCard.css";
import { useBooking } from '@/app/app/hooks/useBooking';
import { usePlaceAutocomplete } from '@/app/app/hooks/usePlaceAutocomplete';
import BookingTabs from "./BookingTabs";
import TripTypeToggle from "./TripTypeToggle";
import FormInput from "./FormInput";
import { useSelector } from "react-redux";

export default function BookingForm() {
  const { formData, handleFieldUpdate, tripType, activeTab } = useBooking();

  const { suggestions: fromSuggestions, search: searchFrom, clear: clearFrom } = usePlaceAutocomplete();
  const { suggestions: toSuggestions, search: searchTo, clear: clearTo } = usePlaceAutocomplete();

  console.log(useSelector(state => state.booking));
  

  const handleSelectPlace = (field, place) => {
    handleFieldUpdate(field, place.label);
    handleFieldUpdate(`${field}Coords`, { lat: place.lat, lng: place.lng });
    if (field === 'fromLocation') clearFrom();
    else clearTo();
  };

  return (
    <div className="booking-portal-card">
      <BookingTabs />

      <div className="portal-form-body">
        {activeTab !== 'airport' && <TripTypeToggle />}

        <form className="booking-form-grid" onSubmit={(e) => e.preventDefault()}>

          {/* Grid Row 1: Locations */}
          <div className="form-grid-row">
            <div className="autocomplete-wrapper">
              <FormInput
                label="FROM"
                value={formData.fromLocation}
                onChange={(v) => {
                  handleFieldUpdate('fromLocation', v);
                  searchFrom(v);
                }}
                placeholder="Enter City"
              />
              {fromSuggestions.length > 0 && (
                <ul className="suggestions-dropdown">
                  {fromSuggestions.map((s, idx) => (
                    <li key={idx} onClick={() => handleSelectPlace('fromLocation', s)}>
                      {s.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="autocomplete-wrapper">
              <FormInput
                label="TO"
                value={formData.toLocation}
                onChange={(v) => {
                  handleFieldUpdate('toLocation', v);
                  searchTo(v);
                }}
                placeholder="Enter City"
              />
              {toSuggestions.length > 0 && (
                <ul className="suggestions-dropdown">
                  {toSuggestions.map((s, idx) => (
                    <li key={idx} onClick={() => handleSelectPlace('toLocation', s)}>
                      {s.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Grid Row 2: Pickup & Return/Time */}
          <div className="form-grid-row">
            <FormInput
              label="PICKUP DATE"
              type="date"
              value={formData.pickupDate}
              onChange={(v) => handleFieldUpdate('pickupDate', v)}
            />

            {tripType === 'round-trip' ? (
              <FormInput
                label="RETURN DATE"
                type="date"
                value={formData.returnDate}
                onChange={(v) => handleFieldUpdate('returnDate', v)}
              />
            ) : (
              <FormInput
                label="PICKUP TIME"
                type="time"
                value={formData.pickupTime}
                onChange={(v) => handleFieldUpdate('pickupTime', v)}
              />
            )}
          </div>

          {/* Form Footer */}
          <div className="form-footer-action">
            <button className="explore-cabs-btn" type="submit">
              EXPLORE CABS
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
