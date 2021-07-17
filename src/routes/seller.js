const express = require('express');
const router = express.Router();
const ctrlSeller = require('../controllers/seller');
const cache = require('../middleware/cache');
const validate = require('../middleware/validate');
const uploads = require('../middleware/upload');
const ctrlProduct = require('../controllers/products');
const ormSeller = require('../controllers/seller-sequelize');

router.post('/registration', ctrlSeller.sellerRegistration);
router.put('/reset-password', ctrlSeller.resetPassword);
router.get(
	'/:seller',
	validate('seller'),
	cache.sellerCache,
	ctrlSeller.getProductSeller
);
router.post(
	'/addProduct',
	validate('seller'),
	uploads.single('img'),
	ctrlProduct.addToProduct
);
router.delete('/delete', validate('seller'), ctrlProduct.deleteProduct);
router.put(
	'/updateProduct',
	validate('seller'),
	uploads.single('img'),
	ctrlProduct.updateProduct
);

router.put(
	'/profile',
	validate('seller'),
	uploads.single('img'),
	ormSeller.updateStore
);

module.exports = router;
