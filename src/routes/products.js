const express = require('express');
const router = express.Router();
const ctrlProducts = require('../controllers/products');

router.get('/', ctrlProducts.getAll);
router.post('/', ctrlProducts.addData);
router.get('/getID/:id', ctrlProducts.getID);

module.exports = router;
