// src/components/HomePage.jsx
import React from 'react';
import '../styles/HomePage.css';
//import Navbar from './Navbar';

function HomePage() {
  return (
    <div>
       
       <div className="home-page">
      
      <div className="intro-card">
        <h1>Personal Finance Dashboard</h1>
        <p>
          This app helps you track your income and expenses with ease.
          Visualize your financial flow and stay in control of your money!
        </p>
      </div>

      <div className="features-section">
        <h2>Features</h2>
        <ul>
          <li>Add and track your income sources</li>
          <li>Record daily expenses</li>
          <li>Visualize monthly financial data</li>
          <li>Filter and analyze your spending patterns</li>
        </ul>
      </div>

      <div className="getting-started">
        <h2>Get Started</h2>
        <p>
          Use the navigation bar to add income, record expenses, or view your
          financial graphs. Select any month in the visualizer to analyze!
        </p>
      </div>
    </div>
    </div>
  
  );
}

export default HomePage;

