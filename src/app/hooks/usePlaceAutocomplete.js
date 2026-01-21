'use client'
import { useState, useRef, useCallback } from 'react';

export function usePlaceAutocomplete() {
  const [suggestions, setSuggestions] = useState([]);
  const debounceRef = useRef(null);

  const search = useCallback((input) => {
    if (!input) {
      setSuggestions([]);
      return;
    }

    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(input)}&limit=5`);
        const data = await res.json();
        const mapped = data.features.map(f => ({
          label: f.properties.name + (f.properties.city ? ', ' + f.properties.city : ''),
          lat: f.geometry.coordinates[1],
          lng: f.geometry.coordinates[0],
        }));
        setSuggestions(mapped);
      } catch (err) {
        console.error('Photon autocomplete error:', err);
        setSuggestions([]);
      }
    }, 300); // debounce 300ms
  }, []);

  const clear = useCallback(() => setSuggestions([]), []);

  return { suggestions, search, clear };
}
