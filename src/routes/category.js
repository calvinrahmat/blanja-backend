const express = require('express');
const router = express.Router();
const ctrlCategory = require('../controllers/category');

router.get('/', ctrlCategory.getAll);
router.post('/addCategory', ctrlCategory.addCategory);
router.put('/updateCategory', ctrlCategory.updateCategory);
router.delete('/delete', ctrlCategory.deleteCategory);

module.exports = router;
