const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/users');
const ormUser = require('../controllers/users-sequelize');
const validate = require('../middleware/validate.js');
const uploads = require('../middleware/upload');

router.post('/registration', ctrlUser.userRegistration);
router.put('/reset-password', ctrlUser.resetPassword);
router.get('/getall', ctrlUser.getAll);
router.put(
	'/profile',
	// validate('customer'),
	uploads.single('img'),
	ormUser.updateProfile
);
router.get('/:email', ctrlUser.getUser);

module.exports = router;
