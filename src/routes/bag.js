const express = require('express');
const router = express.Router();
const ctrlBag = require('../controllers/bag');

router.get('/', ctrlBag.getAll);
router.post('/', ctrlBag.addData);

module.exports = router;
