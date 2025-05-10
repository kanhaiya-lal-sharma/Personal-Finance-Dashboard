// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">💰 FinanceDash</div>
      <ul className="navbar-links">
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/add-income">Add Income</Link></li>
        <li><Link to="/add-expense">Add Expense</Link></li>
        <li><Link to="/visualization">Visualization</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
