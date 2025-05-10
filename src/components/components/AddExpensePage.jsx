import React, { useState } from "react";
import "../styles/AddExpensePage.css";
import Navbar from "./Navbar";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddExpensePage = ({ onUpdate }) => {
  const [title, setTitle] = useState("Groceries");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    const month = new Date(date).toLocaleString("default", { month: "long" });

    await addDoc(collection(db, "expenses"), {
      title,
      amount: +amount,
      date,
      month,
    });

    onUpdate(); // Refresh expenses
    setTitle("Groceries");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      <Navbar />
      <div className="expense-container">
        <h2>Add Expense</h2>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <select value={title} onChange={(e) => setTitle(e.target.value)}>
            <option>Groceries</option>
            <option>Electricity</option>
            <option>Shopping</option>
            <option>Gas</option>
            <option>Other</option>
          </select>

          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />

          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

          <button type="submit">Add Expense</button>
        </form>
      </div>
    </div>
  );
};

export default AddExpensePage;
