import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <div className="landing-container">
      
      <section className="testimonials-wrapper">
        <h2>Customer Testimonials</h2>
        <div className="testimonial-grid">
          {[
            { name: "Vikram Kulkarni", loc: "Kalyan, Maharashtra", text: "I used Yatri Cabs for my one-way trip from Lucknow to Varanasi, and I was genuinely surprised by how much I saved! The 50% off claim is real, and it was significantly cheaper than taking a train. The car was clean, and the driver was professional. Highly recommended!" },
            { name: "Rajesh Kumawat", loc: "Kanpur, Uttar Pradesh", text: "The GPS-based billing system is a game-changer. I always worried about drivers tampering with meters on long intercity rides, but with Yatri Cabs, everything was transparent It gave me complete peace of mind. Excellent service for my trip to Ayodhya!" },
            { name: "Anjali Mishra", loc: "Gorakhpur, Uttar Pradesh", text: "Traveling with my family from Gorakhpur to Prayagraj was so comfortable with Yatri Car Rental. We chose an SUV and it was spacious and well-maintained. The driver was courteous and knowledgeable about the route. It made the pilgrimage hassle-free and enhoyable." },
            { name: "Siddharth Vaidya", loc: "Rohini, Delhi", text: "As a frequent business traveler, finding a reliable one-way cab service is crucial. Yatri Cabs delivers exactly that. Their 24/7 support and easy booking process through the app make my life so much simpler. They're my go-to for intercity travel now." }
          ].map((t, i) => (
            <div key={i} className="testimonial-card">
              <div>
                <div className="stars">★★★★★</div>
                <p className="testimonial-content">{t.text}</p>
              </div>
              <div className="author-info">
                <span className="author-name">{t.name}</span>
                <span className="author-loc">{t.loc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default Testimonial;