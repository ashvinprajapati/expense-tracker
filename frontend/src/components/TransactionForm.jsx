import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [form, setForm] = useState({ title: '', amount: '', type: 'income' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(form);
    setForm({ title: '', amount: '', type: 'income' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-3 mb-4">
      <h3 className="text-lg font-semibold">New Transaction</h3>
      <div className="flex space-x-2">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Description"
          className="border px-2 py-1 flex-grow"
          required
        />
        <input
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="border px-2 py-1 w-24"
          required
        />
      </div>
      <select name="type" value={form.type} onChange={handleChange} className="border px-2 py-1 w-full">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
};

export default TransactionForm;
