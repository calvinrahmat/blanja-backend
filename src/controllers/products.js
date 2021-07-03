const productsMethod = {};
const modelDB = require('../models/products');

productsMethod.getAll = async (req, res) => {
	try {
		const response = await modelDB.getAll();
		res.send(response);
	} catch (error) {
		res.send(error);
	}
};

productsMethod.getID = (req, res) => {
	const findID = data.find((a) => a.id === parseInt(req.params.id));
	if (!findID) res.status(404).send('The ID not found');
	res.send(findID);
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
