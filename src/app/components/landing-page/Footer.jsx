import React from 'react';
import './Footer.css';

const Footer = () => {

  const navLinks = [
    { name: "Home", url: "https://www.yatricabs.com" },
    { name: "About", url: "https://www.yatricabs.com/about" },
    { name: "Services", url: "https://www.yatricabs.com/services" },
    { name: "Career", url: "https://www.yatricabs.com/career" },
    { name: "Contact", url: "https://www.yatricabs.com/contact" },
    { name: "Privacy Policy", url: "https://www.yatricabs.com/privacy-policy" },
    { name: "Terms & Condition", url: "https://www.yatricabs.com/terms-condition" }
  ];

  return (
    <footer>

      {/* Main Black Footer Section */}
      <div className="footer-container">
        <div className="footer-logo">
          {/* Use your logo image path here */}
          <img src="/logo.svg" alt="YATRI CABS" />
        </div>

        <nav className="footer-nav">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url}
              target="_blank" 
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="copyright">
          All Copyrights are reserved by YATRI CABS
        </div>
      </div>
    </footer>
  );
};

export default Footer;