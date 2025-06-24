import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TransactionForm from '../components/TransactionForm.jsx';
import TransactionList from '../components/TransactionList.jsx';
import SummaryChart from '../components/SummaryChart.jsx';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const res = await axios.get('http://localhost:5000/api/transactions', {
      headers: { Authorization: token },
    });
    setTransactions(res.data);
  };

  const addTransaction = async (txn) => {
    await axios.post('http://localhost:5000/api/transactions', txn, {
      headers: { Authorization: token },
    });
    fetchTransactions();
  };

  const deleteTransaction = async (id) => {
    await axios.delete(`http://localhost:5000/api/transactions/${id}`, {
      headers: { Authorization: token },
    });
    fetchTransactions();
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow-lg">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button onClick={logout} className="text-red-500">Logout</button>
        </div>
        <TransactionForm addTransaction={addTransaction} />
        <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
        <div className="my-4">
          <SummaryChart transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
