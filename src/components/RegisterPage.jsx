import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterPage.css';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created successfully 😊');
      navigate('/'); // redirect to login page
    } catch (error) {
      alert('Failed to create account. 😒' + error.message);
    }
  };

  return (
    <div className="register-page">
      <form onSubmit={handleRegister} className="register-form">
        <h2>Create New Account</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
        <p className="login-link" onClick={() => navigate('/')}>
          Already have an account? Login
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
