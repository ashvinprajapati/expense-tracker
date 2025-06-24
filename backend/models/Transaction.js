const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  type: { type: String, enum: ['income', 'expense'] },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', transactionSchema);
