// src/components/Dashboard.jsx

import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); // redirect back to login
    } catch (error) {
      alert("Failed to logout.");
    }
  };

  return (
    <div className="dashboard-container">
       <Navbar/>
      
      <div className="main-content">
        <HomePage/>

        <div className="logout-section">
          <h1>
            Click to logout -
            <button onClick={handleLogout}>Logout</button>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
