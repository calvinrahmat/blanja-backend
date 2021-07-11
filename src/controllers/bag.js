const bagMethod = {};
const modelBag = require('../models/bag');
const handler = require('../helpers/errorhandler');
const { redisDb } = require('../configs/redis');

bagMethod.getAll = async (req, res) => {
	try {
		const result = await modelBag.getAllBag();
		const data = JSON.stringify(result);
		console.log('data dari postgre');
		redisDb.setex('bag', 20, data);
		handler(res, 200, result);
	} catch (error) {
		console.log(error);
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
