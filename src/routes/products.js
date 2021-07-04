const express = require('express');
const router = express.Router();
const ctrlProducts = require('../controllers/products');

router.get('/:category', ctrlProducts.getAll);
router.post('/addData', ctrlProducts.addData);
router.get('/category/:category', ctrlProducts.getCategory);

module.exports = router;
