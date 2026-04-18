// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/background1.jpeg'; // Ensure this path is correct

const LandingPage = () => {
  return (
    <div className="landing-page" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <h1>Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful houseplants!</p>
      <Link to="/products" className="get-started-button">Get Started</Link>
    </div>
  );
};

export default LandingPage;
