'use client'
import './Intercity.css';

export default function Intercity() {
  return (
    <section className="info-section">
      {/* Top Feature Grid */}
      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-icon green-hand" />
          <h3>RETURN FARE, NOT FAIR!</h3>
          <p>
            Why Pay For Return Journey When You Are Travelling Oneway? 
            Now Get Discounted AC Taxi At Just Half Of The Round Trip Cost For Your One Way Travel.
          </p>
        </div>

        <div className="feature-card divider">
          <div className="feature-icon green-gps" />
          <h3>GPS BASED BILLING SYSTEM</h3>
          <p>
            Since The GPS Data Captures The Actual Distance And Time Travelled, 
            It Reduces The Chance Of Kilometer Tampering Or Discrepancies In Billing.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon green-car" />
          <h3>NOW AVAILABLE ROUTES ARE!</h3>
          <p className="routes-list">
            Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly
          </p>
        </div>
      </div>

      {/* Bottom Text Block */}
      <div className="premier-service-block">
        <h2>INDIA'S PREMIER INTERCITY AND LOCAL TAXI SERVICES</h2>
        <p>
          At Yatri Cabs, We Pride Ourselves On Being A Top-Tier Online Oneway Cab Booking Service, 
          Delivering Reliable And Premium Intercity And Local Taxi Services. With Over A Decade Of Experience, 
          Instead Of Self-Drive Car Rental, We Have Become The Leading Driver-Driven One Way Car Rental Company 
          In India, Renowned For Our Extensive Coverage Across The Country.
        </p>
      </div>
    </section>
  );
}