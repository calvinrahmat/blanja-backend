const express = require('express');
const router = express.Router();
const ctrlBag = require('../controllers/bag');
const validate = require('../middleware/validate');

router.get('/', validate, ctrlBag.getAll);
router.delete('/del', validate, ctrlBag.deleteItem);
router.get('/total', validate, ctrlBag.totalPrice);
router.put('/updateQty', validate, ctrlBag.updateQuantity);

module.exports = router;
