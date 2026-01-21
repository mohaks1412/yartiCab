'use client'

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useCallback } from 'react';
import {
  setTab,
  setTripType,
  updateField,
  resetForm
} from '@/app/store/slices/bookingSlice';

export const useBooking = () => {
  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.booking.activeTab);
  const tripType = useSelector((state) => state.booking.tripType);
  const formData = useSelector(
    (state) => state.booking.formData,
    shallowEqual
  );

  const handleTabChange = useCallback(
    (tab) => dispatch(setTab(tab)),
    [dispatch]
  );

  const handleTripTypeChange = useCallback(
    (type) => dispatch(setTripType(type)),
    [dispatch]
  );

  const handleFieldUpdate = useCallback(
    (field, value) => dispatch(updateField({ field, value })),
    [dispatch]
  );

  const clearForm = useCallback(
    () => dispatch(resetForm()),
    [dispatch]
  );

  return {
    activeTab,
    tripType,
    formData,
    handleTabChange,
    handleTripTypeChange,
    handleFieldUpdate,
    clearForm,
  };
};
