'use client'

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTab: 'outstation', // outstation, local, airport
  tripType: 'one-way',     // one-way, round-trip
  formData: {
    fromLocation: '',
    toLocation: '',
    pickupDate: '',
    returnDate: '',
    pickupTime: '00:00',
  },
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setTab: (state, action) => {
      state.activeTab = action.payload;
      if (action.payload === 'local') {
        state.formData.toLocation = '';
      }
    },
    setTripType: (state, action) => {
      state.tripType = action.payload;
    },
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
    }
  },
});

export const { setTab, setTripType, updateField, resetForm } = bookingSlice.actions;
export default bookingSlice.reducer;