const express = require('express');
const router = express.Router();
const ctrlLoginSeller = require('../controllers/login_seller');
const ctrlLoginCustomer = require('../controllers/login_customers');

router.post('/seller', ctrlLoginSeller.login);
router.post('/customer', ctrlLoginCustomer.login);

module.exports = router;
