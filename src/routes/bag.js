const express = require('express');
const router = express.Router();
const ctrlBag = require('../controllers/bag');
const validate = require('../middleware/validate');
const cache = require('../middleware/cache');

router.get('/', ctrlBag.getAll);
router.delete('/del', validate('customer'), ctrlBag.deleteItem);
router.put('/updateqty', validate('customer'), ctrlBag.updateQuantity);

module.exports = router;
