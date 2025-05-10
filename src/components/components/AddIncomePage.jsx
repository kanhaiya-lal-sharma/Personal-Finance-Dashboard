import React, { useState } from "react";
import "../styles/AddIncomePage.css";
import Navbar from "./Navbar";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddIncomePage = ({ onUpdate }) => {
  const [title, setTitle] = useState("Job");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    const month = new Date(date).toLocaleString("default", { month: "long" });

    await addDoc(collection(db, "income"), {
      title,
      amount: +amount,
      date,
      month,
    });

    onUpdate(); // Refresh income
    setTitle("Job");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      <Navbar />
      <div className="income-container">
        <h2>Add Income</h2>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <select value={title} onChange={(e) => setTitle(e.target.value)}>
            <option>Job</option>
            <option>Freelancing</option>
            <option>Stock</option>
            <option>Internship</option>
            <option>Other</option>
          </select>

          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />

          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

          <button type="submit">Add Income</button>
        </form>
      </div>
    </div>
  );
};

export default AddIncomePage;
