import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Navbar from './Navbar';
import '../styles/VisualizationPage.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF4F81', '#AA336A'];

// Function to get monthly totals (sum of amounts for each month)
function getMonthlyTotals(data) {
  return Object.entries(data).map(([month, items]) => ({
    month,
    total: items.reduce((acc, curr) => acc + curr.amount, 0),
  }));
}

function VisualizationPage({ income, expenses }) {
  const [view, setView] = useState('expense'); // either 'expense' or 'income'
  const [chartType, setChartType] = useState('bar'); // type of chart to display

  let chartData = [];

  // If view is expense, get the expense data; if view is income, get the income data
  if (view === 'expense') {
    chartData = getMonthlyTotals(expenses);
  } else if (view === 'income') {
    chartData = getMonthlyTotals(income);
  }

  // Function to render the selected chart
  const renderChart = () => {
    if (chartType === 'pie') {
      return (
        <PieChart width={600} height={400}>
          <Pie data={chartData} dataKey="total" nameKey="month" cx="50%" cy="50%" outerRadius={150} label>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      );
    }

    if (chartType === 'bar') {
      return (
        <BarChart width={700} height={400} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill={view === 'income' ? '#00C49F' : '#FF8042'} />
        </BarChart>
      );
    }

    if (chartType === 'line') {
      return (
        <LineChart width={700} height={400} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke={view === 'income' ? '#00C49F' : '#FF8042'} />
        </LineChart>
      );
    }
  };

  return (
    <div>
      <Navbar />
      <div className="visualization-container">
        <h2>Visualization Dashboard</h2>
        <div className="controls">
          <select onChange={(e) => setView(e.target.value)} value={view}>
            <option value="expense">Show Expense</option>
            <option value="income">Show Income</option>
          </select>

          <select onChange={(e) => setChartType(e.target.value)} value={chartType}>
            <option value="bar">Bar Chart</option>
            <option value="line">Line Chart</option>
            <option value="pie">Pie Chart</option>
          </select>
        </div>
        <div className="chart-wrapper">{renderChart()}</div>
      </div>
    </div>
  );
}

export default VisualizationPage;
