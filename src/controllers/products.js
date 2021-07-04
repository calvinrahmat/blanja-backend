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
		const response = await modelProduct.filterCategory(req.params.kategori);
		res.send(response);
	} catch (error) {
		res.send(error);
	}
};

productsMethod.searchData = async (req, res) => {
	try {
		const response = await modelProduct.search(req.params.nama);
		res.send(response);
	} catch (error) {
		res.send(error);
	}
};

productsMethod.sortByPriceDescending = async (req, res) => {
	try {
		const response = await modelProduct.sortPriceDesc();
		res.send(response);
	} catch (error) {
		res.send(error);
	}
};

productsMethod.sortByPriceAscending = async (req, res) => {
	try {
		const response = await modelProduct.sortPriceAsc();
		res.send(response);
	} catch (error) {
		res.send(error);
	}
};

productsMethod.sortByNameAscending = async (req, res) => {
	try {
		const response = await modelProduct.sortNameAsc();
		res.send(response);
	} catch (error) {
		res.send(error);
	}
};

productsMethod.sortByNameDescending = async (req, res) => {
	try {
		const response = await modelProduct.sortNameDesc();
		res.send(response);
	} catch (error) {
		res.send(error);
	}
};

module.exports = productsMethod;
