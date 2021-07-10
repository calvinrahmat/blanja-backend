const express = require('express');
const router = express.Router();
const ctrlBag = require('../controllers/bag');
const validate = require('../middleware/validate');

router.get('/', validate('customer'), ctrlBag.getAll);
router.delete('/del', validate('customer'), ctrlBag.deleteItem);
router.get('/total', validate('customer'), ctrlBag.totalPrice);
router.put('/updateQty', validate('customer'), ctrlBag.updateQuantity);

module.exports = router;
