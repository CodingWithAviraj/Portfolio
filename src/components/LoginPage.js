// LoginPage.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Data from '../data';

const LoginPage = () => {
  
  const[formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) =>{
    const {name , value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login form submission
    try{
      console.log(formData);
      console.log(`server: ${Data.server}/login`);
     // const res = await axios.post('http://localhost:5000/login', formData);
      const res = await axios.post(`${Data.server}/login`, formData);
     
      console.log("server responese:"  + res.data.message + "\n" + res.data.token);
      const data = {
        token: res.data.token,
        time : Date.now()
      }
      localStorage.setItem("mytoken", JSON.stringify(data));
      //alert('Sign up successful! You will be redirected to the home page.');
      console.log("localstorage data:" + JSON.parse(localStorage.getItem('mytoken')));
      navigate('/');
    }
    catch(err){
      console.error("login server error" + err);
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input onChange={handleInputChange} name="email" value={formData.email} type="email" placeholder="Email Address" required />
          <input onChange={handleInputChange} name="password" value={formData.password} type="password" placeholder="Password" autoComplete="current-password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
