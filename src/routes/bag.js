const express = require('express');
const router = express.Router();
const ctrlBag = require('../controllers/bag');

router.get('/:email', ctrlBag.getAll);
router.delete('/del', ctrlBag.deleteItem);
router.put('/updateqty', ctrlBag.updateQuantity);
router.get('/totalqty/:email', ctrlBag.getTotalQty);
router.get('/totalprice/:email', ctrlBag.getTotalPrice);

module.exports = router;
