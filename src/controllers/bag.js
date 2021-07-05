const bagMethod = {};
const modelBag = require('../models/bag');

bagMethod.getAll = async (req, res) => {
	try {
		const response = await modelBag.getAll();
		res.send(response);
	} catch (error) {
		res.send(error);
	}
};

bagMethod.deleteItem = async (req, res) => {
	try {
		const response = await modelBag.delete(req.body);
		res.send(response);
	} catch (error) {
		res.send(error);
	}
};

bagMethod.totalPrice = async (req, res) => {
	try {
		const response = await modelBag.total();
		res.send(response);
	} catch (error) {
		res.send(error);
	}
};

module.exports = bagMethod;
