const express = require('express');
const router = express.Router();
const products = require('./routes/products');
const users = require('./routes/users');

router.use('/products', products);
router.use('/users', users);
router.use('*', (req, res) => {
	res.send('page not found');
});
module.exports = router;
