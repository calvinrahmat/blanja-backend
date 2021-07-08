const express = require('express');
const router = express.Router();
const ctrlProducts = require('../controllers/products');

router.get('/', ctrlProducts.getAll);
router.get('/Kategori/:kategori_id', ctrlProducts.getCategory);
router.get('/search/nama', ctrlProducts.searchData);
router.get('/search/seller', ctrlProducts.filterSeller);
router.get('/sort', ctrlProducts.sort);
router.post('/addToBag', ctrlProducts.addToBag);
router.post('/addProduct', ctrlProducts.addToProduct);
router.delete('/delete', ctrlProducts.deleteProduct);
router.put('/updateProduct', ctrlProducts.updateProduct);
module.exports = router;
