const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/users');
const validation = require('../middleware/validate');

router.post('/registration', ctrlUser.userRegistration);
router.put('/reset-password', ctrlUser.resetPassword);
router.get('/getall', ctrlUser.getAll);

module.exports = router;
