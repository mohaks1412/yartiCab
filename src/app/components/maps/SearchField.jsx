import { useState } from 'react';
import { useGoogleMaps } from '@/app/hooks/useGoogleMaps';
import { usePlaceAutocomplete } from '@/app/hooks/usePlaceAutocomplete';
import { usePlaceDetails } from '@/app/hooks/usePlaceDetails';
import { useBooking } from '@/app/hooks/useBooking';

function LocationSearchField({ field }) {
  const mapsReady = useGoogleMaps();
  const { suggestions, search, clear } = usePlaceAutocomplete();
  const resolvePlace = usePlaceDetails();
  const { handleFieldUpdate } = useBooking();

  const [value, setValue] = useState('');

  if (!mapsReady) return null;

  const onSelect = async (prediction) => {
    const location = await resolvePlace(prediction.place_id);
    handleFieldUpdate(field, location);
    setValue(location.label);
    clear();
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          search(e.target.value);
        }}
      />

      {suggestions.map((p) => (
        <div key={p.place_id} onClick={() => onSelect(p)}>
          {p.description}
        </div>
      ))}
    </div>
  );
}
