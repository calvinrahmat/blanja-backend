const express = require('express');
const router = express.Router();
const ctrlBag = require('../controllers/bag');
const validate = require('../middleware/validate');
const cache = require('../middleware/cache');

router.get('/', validate('customer'), cache.bagCache, ctrlBag.getAll);
router.delete('/del', validate('customer'), ctrlBag.deleteItem);
router.get('/total', validate('customer'), ctrlBag.totalPrice);
router.put('/updateQty', validate('customer'), ctrlBag.updateQuantity);

module.exports = router;
