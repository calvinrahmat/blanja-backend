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

module.exports = bagMethod;
