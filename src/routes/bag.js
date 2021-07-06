const express = require('express');
const router = express.Router();
const ctrlBag = require('../controllers/bag');

router.get('/', ctrlBag.getAll);
router.delete('/del', ctrlBag.deleteItem);
router.get('/total', ctrlBag.totalPrice);
router.post('/updateQty', ctrlBag.updateQuantity);

module.exports = router;
