import React from 'react';
import './AvailableIn.css';

const AvailableIn = () => {
  const cities = [
    { name: "Lucknow", slug: "lucknow" },
    { name: "Ayodhya", slug: "ayodhya" },
    { name: "Gorakhpur", slug: "gorakhpur" },
    { name: "Varanasi", slug: "varanasi" },
    { name: "Allahabad (Prayagraj)", slug: "allahabad" },
    { name: "Kanpur", slug: "kanpur" }
  ];

  return (
    <div className="main-wrapper">
      <section className="cities-section">
        <div className="cities-list">
          <h3>Operational Cities :</h3>
          {cities.map((city, index) => (
            <a key={index} href={`https://yatricabs.com/${city.slug}/car-rental`} className="city-link">
              {city.name}
            </a>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AvailableIn;