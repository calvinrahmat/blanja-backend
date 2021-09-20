const express = require('express');
const router = express.Router();
const ctrlProducts = require('../controllers/products');
const validate = require('../middleware/validate');
const cache = require('../middleware/cache');

router.get('/', ctrlProducts.getAllProducts);
router.get('/Kategori/:kategori_id', ctrlProducts.getCategory);
router.get('/search/nama', ctrlProducts.searchData);
router.get('/search/seller', ctrlProducts.filterSeller);
router.get('/sort', ctrlProducts.sort);
router.post('/addToBag/', ctrlProducts.addToBag);
router.get('/popular', ctrlProducts.getAllProductsPopular);
router.get('/:id', ctrlProducts.getOneProduct);

module.exports = router;
