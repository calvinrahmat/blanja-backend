const express = require('express');
const router = express.Router();
const ctrlProducts = require('../controllers/products');

router.get('/', ctrlProducts.getAll);
router.get('/Kategori/:kategori', ctrlProducts.getCategory);
router.get('/search/:nama', ctrlProducts.searchData);
router.get('/sort/PriceDesc', ctrlProducts.sortByPriceDescending);
router.get('/sort/PriceAsc', ctrlProducts.sortByPriceAscending);
router.get('/sort/NameAsc', ctrlProducts.sortByNameAscending);
router.get('/sort/NameDesc', ctrlProducts.sortByNameDescending);

module.exports = router;
