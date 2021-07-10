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
		console.log(req.query.p);
		const result = await modelProduct.search(req.query.p);
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

productsMethod.filterSeller = async (req, res) => {
	try {
		console.log(req.query.st);
		const result = await modelProduct.search(req.query.st);
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

productsMethod.sort = async (req, res) => {
	try {
		const key = req.query.ob;
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
		const result = await modelProduct.addItemBag(req.body);
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

productsMethod.updateProduct = async (req, res) => {
	try {
		const data = {
			nama: req.body.nama,
			seller: req.body.seller,
			kategori: req.body.kategori,
			harga: req.body.harga,
			kategori_id: req.body.kategori_id,
			img: req.file.path,
		};

		const result = await modelProduct.changeProduct(data);
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

productsMethod.deleteProduct = async (req, res) => {
	try {
		console.log(req.query.id);
		const result = await modelProduct.delete(req.query.id);
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

productsMethod.addToProduct = async (req, res) => {
	try {
		const data = {
			nama: req.body.nama,
			seller: req.body.seller,
			kategori: req.body.kategori,
			harga: req.body.harga,
			kategori_id: req.body.kategori_id,
			img: req.file.path,
		};

		const result = await modelProduct.addProduct(data);
		handler(res, 200, console.log(result));
	} catch (error) {
		console.log(error);
		handler(res, 400, error);
	}
};

module.exports = productsMethod;
