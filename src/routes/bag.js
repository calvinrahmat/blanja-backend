const express = require('express');
const router = express.Router();
const ctrlBag = require('../controllers/bag');

router.get('/:email', ctrlBag.getAll);
router.delete('/del', ctrlBag.deleteItem);
router.delete('/del/all/:email', ctrlBag.deleteAllBag);
router.put('/updateqty', ctrlBag.updateQuantity);
router.get('/totalqty/:email', ctrlBag.getTotalQty);
router.get('/totalprice/:email', ctrlBag.getTotalPrice);
router.get('/items/:email', ctrlBag.getBagItemByQty);

module.exports = router;
