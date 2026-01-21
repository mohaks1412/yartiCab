import React from 'react';
import './WhyYatri.css';


const Features = () => {
  const featureData = [
    { 
      title: "FAST RESPONSE TIME", 
      desc: "Experience the best car rental service with driver for local or outstation trips. Enjoy prompt response times and seamless car hire service.", 
      icon: (
        <img src="/bolt.svg" alt="Rupee Icon" />
      )
    },
    { 
      title: "VAST FLEET", 
      desc: "We offer a wide range of rental cars including Sedans, SUVs, MUVs, Premium Sedans, and Tempo Travellers to meet all your needs.", 
      icon: (
        <img src="/people.svg" alt="Rupee Icon" />
      )
    },
    { 
      title: "EASY TO ORDER", 
      desc: "Easily book a cab online through our user-friendly website, mobile application, or by calling our customer support team.", 
      icon: (
        <img src="/easy-to-order.svg" alt="Rupee Icon" />
      )
    },
    { 
      title: "GREAT TARIFFS", 
      desc: "Rent a car at the lowest rates! Our car hire tariffs are highly competitive compared to other operators.", 
      icon: (
        <img src="/paid.svg" alt="Rupee Icon" />
      )
    }
  ];

  return (
    <section className="features-container">
      
      <div className="image-section">
        <img src="car-rental-agra.svg" alt="White Sedan" className="car-image" />
      </div>

      <div className="content-section">
        <h2 className="main-heading">WHY <span className="highlight">YATRI</span>?</h2>
        
        <div className="features-list">
          {featureData.map((item, index) => (
            <div key={index} className="feature-item">
              <div className="icon-box">{item.icon}</div>
              <div className="text-box">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;