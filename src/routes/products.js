const express = require('express');
const router = express.Router();
const ctrlProducts = require('../controllers/products');

router.get('/', ctrlProducts.getAll);
router.get('/Kategori/:kategori_id', ctrlProducts.getCategory);
router.get('/search/nama', ctrlProducts.searchData);
router.get('/sort', ctrlProducts.sort);
router.post('/addToBag', ctrlProducts.addToBag);
router.post('/updateRating', ctrlProducts.updateRating);
module.exports = router;
