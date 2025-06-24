const Transaction = require('../models/Transaction');

exports.getTransactions = async (req, res) => {
  const txns = await Transaction.find({ userId: req.userId }).sort({ createdAt: -1 });
  res.json(txns);
};

exports.addTransaction = async (req, res) => {
  const { title, amount, type } = req.body;
  const txn = await Transaction.create({ title, amount, type, userId: req.userId });
  res.json(txn);
};

exports.deleteTransaction = async (req, res) => {
  const { id } = req.params;
  await Transaction.findByIdAndDelete(id);
  res.json({ msg: 'Deleted' });
};
