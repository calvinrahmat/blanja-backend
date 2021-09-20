const bagMethod = {};
const modelBag = require('../models/bag');
const handler = require('../helpers/errorhandler');
const logger = require('../helpers/logger');

bagMethod.getAll = async (req, res) => {
	try {
		const result = await modelBag.getAllBag(req.params.email);
		logger.debug('data dari postgre');
		handler(res, 200, result);
	} catch (error) {
		console.log(error);
		handler(res, 400, error);
	}
};

bagMethod.deleteItem = async (req, res) => {
	try {
		const check = await modelBag.getID(req.query.id);
		if (check.length > 0) {
			const result = await modelBag.delete(req.query.id);
			handler(res, 200, { msg: 'item deleted' });
		} else {
			handler(res, 400, { msg: 'no item deleted' });
		}
	} catch (error) {
		handler(res, 500, error);
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
