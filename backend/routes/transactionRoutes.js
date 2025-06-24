const express = require('express');
const router = express.Router();
const auth = require('../gmiddleware/authMiddleware');
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require('../controllers/transactionController');

router.use(auth);
router.get('/', getTransactions);
router.post('/', addTransaction);
router.delete('/:id', deleteTransaction);

module.exports = router;
