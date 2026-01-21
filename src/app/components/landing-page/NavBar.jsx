import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="nav-logo">
          <img src="/logo.svg" alt="Yatri Cabs" />
        </div>

        {/* Support Section */}
        <div className="support-badge">
          <img src="/contact.svg" alt="Contact Support" />
        </div>

        {/* Action Section */}
        <div className="nav-actions">
          <div className="nav-action-item">
            <div className="action-icon">
              <img src="/download-prompt.svg" alt="Download" />
            </div>

          </div>

          <div className="nav-action-item user-profile">
            <div className="action-icon">
               {/* Replace with your profile SVG or Image */}
               <img src="/profilecircle.svg" alt="User" />
            </div>
            <span className="action-label">Hi, Ravi</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;