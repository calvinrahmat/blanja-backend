const categoryMethod = {};
const modelCategory = require('../models/category');
const handler = require('../helpers/errorhandler');

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
		const result = await modelCategory.addItem(req.body);
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

categoryMethod.updateCategory = async (req, res) => {
	try {
		const result = await modelCategory.changeCategory(req.body);
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

categoryMethod.deleteCategory = async (req, res) => {
	try {
		console.log(req.query.id);
		const result = await modelCategory.delete(req.query.id);
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

module.exports = categoryMethod;
