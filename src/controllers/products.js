const productsMethod = {};
const modelProduct = require('../models/products');
const handler = require('../helpers/errorhandler');

productsMethod.getAll = async (req, res) => {
	try {
		const result = await modelProduct.getAll();
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

productsMethod.getCategory = async (req, res) => {
	try {
		const result = await modelProduct.filterCategory(req.params.kategori_id);
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

productsMethod.searchData = async (req, res) => {
	try {
		const result = await modelProduct.search(req.params.nama);
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

productsMethod.sortByPriceDescending = async (req, res) => {
	try {
		const result = await modelProduct.sortPriceDesc();
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

productsMethod.sortByPriceAscending = async (req, res) => {
	try {
		const result = await modelProduct.sortPriceAsc();
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

productsMethod.sortByNameAscending = async (req, res) => {
	try {
		const result = await modelProduct.sortNameAsc();
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

productsMethod.sortByNameDescending = async (req, res) => {
	try {
		const result = await modelProduct.sortNameDesc();
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

productsMethod.addToBag = async (req, res) => {
	try {
		const result = await modelProduct.addItem(req.body);
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

module.exports = productsMethod;
