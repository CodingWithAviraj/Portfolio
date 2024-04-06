// LoginPage.js

import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
