'use client'
import './BookingTabs.css';
import { useBooking } from '@/app/app/hooks/useBooking';

const tabs = ['outstation', 'local', 'airport'];

export default function BookingTabs() {
  const { activeTab, handleTabChange } = useBooking();

  return (
    <div className="tabs-container">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
          onClick={() => handleTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}