// TopNavigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import './TopNavigation.css'; // Import CSS file for styling

const TopNavigation = () => {
  return (
    <nav className="top-navigation">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li>
          <Link to="/signup" className="nav-link">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopNavigation;
