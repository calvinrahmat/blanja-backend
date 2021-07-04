const productsMethod = {};
const modelProduct = require('../models/products');

productsMethod.getAll = async (req, res) => {
	try {
		const response = await modelProduct.getAll();
		res.send(response);
	} catch (error) {
		res.send(error);
	}
};

productsMethod.getCategory = async (req, res) => {
	try {
		const response = await modelProduct.filterCategory(req.params.id);
		res.send(response);
	} catch (error) {
		res.send(error);
	}
};

productsMethod.addData = async (req, res) => {
	try {
		const respone = await modelDB.addData(req.body);
		res.send(respone);
	} catch (error) {
		res.send(error);
	}
};

module.exports = productsMethod;
