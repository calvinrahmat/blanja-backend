const express = require('express');
const router = express.Router();
const ctrlBag = require('../controllers/bag');
const validate = require('../middleware/validate');
const cache = require('../middleware/cache');

router.get('/:email', ctrlBag.getAll);
router.delete('/del', ctrlBag.deleteItem);
router.put('/updateqty', ctrlBag.updateQuantity);

module.exports = router;
