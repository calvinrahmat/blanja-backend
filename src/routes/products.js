const express = require('express');
const router = express.Router();
const ctrlProducts = require('../controllers/products');

router.get('/', ctrlProducts.getAll);
router.get('/Kategori/:kategori_id', ctrlProducts.getCategory);
router.get('/search/:nama', ctrlProducts.searchData);
router.get('/sort/PriceDesc', ctrlProducts.sortByPriceDescending);
router.get('/sort/PriceAsc', ctrlProducts.sortByPriceAscending);
router.get('/sort/NameAsc', ctrlProducts.sortByNameAscending);
router.get('/sort/NameDesc', ctrlProducts.sortByNameDescending);
router.post('/addToBag', ctrlProducts.addToBag);

module.exports = router;
