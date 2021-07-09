const express = require('express');
const router = express.Router();
const products = require('./routes/products');
const bag = require('./routes/bag');
const category = require('./routes/category');
const users = require('./routes/users');
const seller = require('./routes/seller');

router.use('/products', products);
router.use('/bag', bag);
router.use('/category', category);
router.use('/user', users);
router.use('/seller', seller);
router.use('*', (req, res) => {
	res.send('page not found');
});

module.exports = router;
