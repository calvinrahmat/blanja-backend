const express = require('express');
const router = express.Router();
const ctrlSeller = require('../controllers/seller');

router.post('/registration', ctrlSeller.sellerRegistration);
router.put('/reset-password', ctrlSeller.resetPassword);

module.exports = router;
