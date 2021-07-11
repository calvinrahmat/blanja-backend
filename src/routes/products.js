const express = require('express');
const router = express.Router();
const ctrlProducts = require('../controllers/products');
const validate = require('../middleware/validate');
const uploads = require('../middleware/upload');
const cache = require('../middleware/cache');

router.get('/', cache.productCache, ctrlProducts.getAllProducts);
router.get('/Kategori/:kategori_id', ctrlProducts.getCategory);
router.get('/search/nama', ctrlProducts.searchData);
router.get('/search/seller', ctrlProducts.filterSeller);
router.get('/sort', ctrlProducts.sort);
router.post('/addToBag', validate('customer'), ctrlProducts.addToBag);
router.post(
	'/addProduct',
	validate('seller'),
	uploads.single('img'),
	ctrlProducts.addToProduct
);
router.delete('/delete', validate('seller'), ctrlProducts.deleteProduct);
router.put(
	'/updateProduct',
	validate('seller'),
	uploads.single('img'),
	ctrlProducts.updateProduct
);
module.exports = router;
