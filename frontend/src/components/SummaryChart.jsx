import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SummaryChart = ({ transactions }) => {
  const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + +t.amount, 0);
  const expense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + +t.amount, 0);

  const data = {
    labels: ['Income', 'Expense'],
    datasets: [{ data: [income, expense], backgroundColor: ['#34D399', '#F87171'] }],
  };

  return <Pie data={data} />;
};

export default SummaryChart;
