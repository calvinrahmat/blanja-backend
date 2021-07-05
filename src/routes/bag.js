const express = require('express');
const router = express.Router();
const ctrlBag = require('../controllers/bag');

router.get('/', ctrlBag.getAll);

module.exports = router;
