import React from 'react';

const TransactionList = ({ transactions, deleteTransaction }) => (
  <div className="bg-white p-4 rounded shadow mb-4">
    <h3 className="text-lg font-semibold mb-2">Transactions</h3>
    <ul>
      {transactions.map((t) => (
        <li key={t._id} className="flex justify-between py-1 border-b last:border-0">
          <span>{t.title} ({t.type})</span>
          <span>
            ₹{t.amount}
            <button
              onClick={() => deleteTransaction(t._id)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default TransactionList;
