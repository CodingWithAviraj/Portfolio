// SignupPage.js

import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';
import './SignupPage.css';
import Data from '../data';

const SignupPage = () => {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // const [redirect, setRedirect] = useState(false);
   const navigate = useNavigate();
  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //const response = await axios.post('http://localhost:5000/signup', formData);
      const response = await axios.post(`${Data.server}/signup`, formData);
      console.log("server response: ", response.data);
      alert('Sign up successful! You will be redirected to the login page.');
      navigate('/Portfolio/login');
    } catch (error) {
      console.error("Error sending data: ", error);
      // Display error message to the user
      alert('Failed to sign up. Please try again later.');
    }
  };

  return (
    <div className="container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            autoComplete="current-password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
