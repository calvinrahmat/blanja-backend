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
	'/products/:email',
	// validate('seller'),

	ctrlSeller.getProductSeller
);
router.get(
	'/profile/:email',
	// validate('seller')
	ctrlSeller.getUser
);
router.get(
	'/name/:email',
	// validate('seller')
	ctrlSeller.getSellerName
);
router.post(
	'/addProduct/',
	//validate('seller'),
	uploads.single('img'),
	ctrlProduct.addToProduct
);
router.delete('/delete', ctrlProduct.deleteProduct);
router.put('/updateProduct', uploads.single('img'), ctrlProduct.updateProduct);

router.put('/profile', uploads.single('img'), ormSeller.updateStore);

module.exports = router;
