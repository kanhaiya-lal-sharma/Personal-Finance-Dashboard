import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Dashboard from './components/Dashboard';
import HomePage from './components/components/HomePage';
import AddIncomePage from './components/components/AddIncomePage';
import AddExpensePage from './components/components/AddExpensePage';
import VisualizationPage from './components/components/VisualizationPage';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [income, setIncome] = useState({});
  const [expenses, setExpenses] = useState({});

  const fetchIncome = async () => {
    const querySnapshot = await getDocs(collection(db, "income"));
    const data = {};
    querySnapshot.forEach(doc => {
      const item = doc.data();
      const month = item.month;
      if (!data[month]) data[month] = [];
      data[month].push(item);
    });
    setIncome(data);
  };

  const fetchExpenses = async () => {
    const querySnapshot = await getDocs(collection(db, "expenses"));
    const data = {};
    querySnapshot.forEach(doc => {
      const item = doc.data();
      const month = item.month;
      if (!data[month]) data[month] = [];
      data[month].push(item);
    });
    setExpenses(data);
  };

  useEffect(() => {
    fetchIncome();
    fetchExpenses();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/add-income" element={<AddIncomePage onUpdate={fetchIncome} />} />
        <Route path="/add-expense" element={<AddExpensePage onUpdate={fetchExpenses} />} />
        <Route path="/visualization" element={<VisualizationPage income={income} expenses={expenses} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
