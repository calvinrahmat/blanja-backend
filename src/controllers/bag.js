const bagMethod = {};
const modelBag = require('../models/bag');

bagMethod.addData = async (req, res) => {
	try {
		const response = await modelBag.addData(req.body);
		res.send(response);
	} catch (error) {
		res.send(error);
	}
};

bagMethod.getAll = async (req, res) => {
	try {
		const response = await modelbagDB.getAll();
		res.send(response);
	} catch (error) {
		res.send(error);
	}
};

module.exports = bagMethod;
