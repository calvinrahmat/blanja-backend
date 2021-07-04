const express = require('express');
const router = express.Router();
const ctrlProducts = require('../controllers/products');

router.get('/', ctrlProducts.getAll);
router.post('/addData', ctrlProducts.addData);
router.get('/kategori/:id', ctrlProducts.getCategory);

module.exports = router;
