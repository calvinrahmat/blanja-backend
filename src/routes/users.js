const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/users');

router.post('/registration', ctrlUser.userRegistration);
//router.put('/resetPassword', ctrlUser.resetPassword);

module.exports = router;
