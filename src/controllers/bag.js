const bagMethod = {};
const modelBag = require('../models/bag');
const handler = require('../helpers/errorhandler');

bagMethod.getAll = async (req, res) => {
	try {
		const result = await modelBag.getAll();
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

bagMethod.deleteItem = async (req, res) => {
	try {
		const result = await modelBag.delete(req.query.id);
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

bagMethod.totalPrice = async (req, res) => {
	try {
		const result = await modelBag.total();
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

bagMethod.updateQuantity = async (req, res) => {
	try {
		const result = await modelBag.updateQty(req.body);
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

module.exports = bagMethod;
