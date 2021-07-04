const express = require('express');
const router = express.Router();
const ctrlProducts = require('../controllers/products');

router.get('/', ctrlProducts.getAll);
router.post('/addData', ctrlProducts.addData);
router.get('/Kategori', ctrlProducts.getCategory);

module.exports = router;
