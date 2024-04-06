// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change Switch to Routes
import TopNavigation from './components/TopNavigation';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

const App = () => {
  return (
    <Router>
      <div>
        <TopNavigation />
        <Routes> {/* Change Switch to Routes */}
          <Route path="/" element={<HomePage />} /> {/* Change exact path to path and use element prop */}
          <Route path="/login" element={<LoginPage />} /> {/* Change component prop to element prop */}
          <Route path="/signup" element={<SignupPage />} /> {/* Change component prop to element prop */}
        </Routes> {/* Change Switch to Routes */}
      </div>
    </Router>
  );
};

export default App;
