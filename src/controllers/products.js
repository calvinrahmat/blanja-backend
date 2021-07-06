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
		const result = await modelProduct.search(req.query.p);
		console.log(req.query.p);
		handler(res, 200, result);
	} catch (error) {
		console.log(error);
		handler(res, 400, error);
	}
};

productsMethod.sort = async (req, res) => {
	try {
		const key = req.query.ob;
		console.log(key);
		if (key == 1) {
			const result = await modelProduct.sortPriceExpensive();
			handler(res, 200, result);
		}
		if (key == 2) {
			const result = await modelProduct.sortPriceCheapest();
			handler(res, 200, result);
		}
		if (key == 3) {
			const result = await modelProduct.sortNameAsc();
			handler(res, 200, result);
		}
		if (key == 4) {
			const result = await modelProduct.sortNameDesc();
			handler(res, 200, result);
		}
		if (key == 5) {
			const result = await modelProduct.sortNewest();
			handler(res, 200, result);
		}
		if (key == 6) {
			const result = await modelProduct.sortOldest();
			handler(res, 200, result);
		} else {
			res.send('no sorting available');
		}
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
