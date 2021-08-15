const categoryMethod = {};
const modelCategory = require('../models/category');
const handler = require('../helpers/errorhandler');
const logger = require('../helpers/logger');
const { check } = require('../configs/redis');

categoryMethod.getAll = async (req, res) => {
	try {
		const result = await modelCategory.getCategory();
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

categoryMethod.getAll = async (req, res) => {
	try {
		const result = await modelCategory.getCategory();
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

categoryMethod.addCategory = async (req, res) => {
	try {
		const check = await modelCategory.checkName(req.body.nama_kategori);
		const result = await modelCategory.addItem(req.body);
		if (check.length !== 0) {
			handler(res, 500, { msg: 'Cannot add existing category' });
		} else {
			logger.debug(result);
			handler(res, 200, { msg: 'category added successfully' });
		}
	} catch (error) {
		handler(res, 400, error);
	}
};

categoryMethod.updateCategory = async (req, res) => {
	try {
		const check = await modelCategory.checkID(req.body.kategori_id);
		if (check.length > 0) {
			const result = await modelCategory.changeCategory(req.body);
			handler(res, 200, { msg: 'Category Updated Successfully' });
		} else {
			handler(res, 500, { msg: 'Update Category Failed' });
		}
	} catch (error) {
		console.log(error);
		handler(res, 400, error);
	}
};

categoryMethod.deleteCategory = async (req, res) => {
	try {
		const check = await modelCategory.checkID(req.query.id);
		if (check.length > 0) {
			const result = await modelCategory.delete(req.query.id);
			handler(res, 200, { msg: 'category deleted' });
		} else {
			handler(res, 500, { msg: 'Delete Category Failed' });
		}
	} catch (error) {
		console.log(error);
		handler(res, 400, error);
	}
};

module.exports = categoryMethod;
