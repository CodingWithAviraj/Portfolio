// Footer.js
import React from 'react';
import logo from '../logo.svg';// Import the logo image
import './Footer.css'; // Import CSS for styling

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-info">
          <h3>Contact Information</h3>
          <p>123 Main Street, Cityville, Country</p>
          <p>Email: photographer@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-social">
          <h3>Connect with Me</h3>
          <ul>
            <li><a href="#Facebook">Facebook</a></li>
            <li><a href="#Instagram">Instagram</a></li>
            <li><a href="#Twitter">Twitter</a></li>
            <li><a href="#LinkedIn">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">&copy; 2024 Photographer Portfolio</p>
    </footer>
  );
};

export default Footer;
