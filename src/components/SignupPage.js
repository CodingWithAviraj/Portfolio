// SignupPage.js

import React from 'react';
import './SignupPage.css';

const SignupPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup form submission
  };

  return (
    <div className="container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
