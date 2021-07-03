const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/users');

router.get('/getAll', ctrlUsers.getAll);

module.exports = router;
