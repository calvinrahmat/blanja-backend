const productsMethod = {};
const modelProduct = require('../models/products');
const handler = require('../helpers/errorhandler');
const { uploads } = require('../helpers/upload_cloud');
const { redisDb } = require('../configs/redis');
const logger = require('../helpers/logger');
const modelProductSeq = require('../models/product-sequelize');

productsMethod.getAllProducts = async (req, res) => {
	try {
		const result = await modelProduct.getAll();
		const data = JSON.stringify(result);
		logger.debug('data dari postgre');
		redisDb.set('products', data);
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

productsMethod.getAllProductsSeq = async (req, res) => {
	try {
		const result = await modelProductSeq.getAll();
		const data = JSON.stringify(result);
		logger.debug('data dari postgre');
		redisDb.set('products', data);
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

productsMethod.getOneProduct = async (req, res) => {
	try {
		const result = await modelProduct.getId(req.params.id);
		const data = JSON.stringify(result);
		logger.debug('data dari postgre');
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

productsMethod.getAllProductsPopular = async (req, res) => {
	try {
		const result = await modelProduct.getAllPopular();
		const data = JSON.stringify(result);
		logger.debug('data dari postgre');

		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

productsMethod.getCategory = async (req, res) => {
	try {
		const check = await modelProduct.getCategoryId(req.params.kategori_id);
		//console.log(check);
		const result = await modelProduct.filterCategory(req.params.kategori_id);
		if (check.length > 0) {
			handler(res, 200, result);
		} else {
			handler(res, 500, { msg: 'no category available' });
		}
	} catch (error) {
		console.log(error);
		handler(res, 400, error);
	}
};

productsMethod.searchData = async (req, res) => {
	try {
		const result = await modelProduct.search(req.query.p);
		if (result.length !== 0) {
			handler(res, 200, result);
		} else {
			return handler(res, 400, { msg: 'no data available' });
		}
	} catch (error) {
		handler(res, 400, error);
	}
};

productsMethod.filterSeller = async (req, res) => {
	try {
		logger.debug(req.query.st);
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
		}
	} catch (error) {
		handler(res, 400, error);
	}
};

productsMethod.addToBag = async (req, res) => {
	try {
		const result = await modelProduct.addItemBag(req.body);
		redisDb.del('product');
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
		console.log(error);
	}
};

productsMethod.updateProduct = async (req, res) => {
	try {
		const check = await modelProduct.getId(req.body.id);
		let urlImage = '';
		if (req.file !== undefined) {
			urlImage = await uploads(req.file.path);
		}
		const data = {
			nama: req.body.nama,
			seller: req.body.seller,
			kategori: req.body.kategori,
			kategori_id: req.body.kategori_id,
			harga: req.body.harga,
			img: urlImage || req.file.path,
			stock: req.body.stock,
			product_desc: req.body.product_desc,
			id: req.body.id,
		};
		console.log(data);
		const result = await modelProduct.changeProduct(data);
		redisDb.del('product');
		handler(res, 200, result);
	} catch (error) {
		console.log(error);
		handler(res, 400, error);
	}
};

productsMethod.deleteProduct = async (req, res) => {
	try {
		console.log(req.query.id);
		const result = await modelProduct.delete(req.query.id);
		redisDb.del('product');
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

productsMethod.addToProduct = async (req, res) => {
	try {
		let urlImage = '';
		if (req.file !== undefined) {
			console.log(`path=${req.file.path}`);
			urlImage = await uploads(req.file.path);
		}
		const data = {
			nama: req.body.nama,
			seller: req.body.seller,
			kategori: req.body.kategori,
			harga: req.body.harga,
			kategori_id: req.body.kategori_id,
			stock: req.body.stock,
			product_desc: req.body.product_desc,
			img: urlImage,
		};

		const result = await modelProduct.addProduct(data);
		redisDb.del('product');
		handler(res, 200, result);
	} catch (error) {
		console.log(error);
		handler(res, 400, error);
	}
};

productsMethod.addToProductSeq = async (req, res) => {
	try {
		let urlImage = '';
		if (req.file !== undefined) {
			console.log(`path=${req.file.path}`);
			urlImage = await uploads(req.file.path);
		}
		const data = {
			nama: req.body.nama,
			seller: req.body.seller,
			kategori: req.body.kategori,
			harga: req.body.harga,
			kategori_id: req.body.kategori_id,
			stock: req.body.stock,
			product_desc: req.body.product_desc,
			img: urlImage,
		};

		const result = await modelProductSeq.addProduct(data);
		redisDb.del('product');
		handler(res, 200, result);
	} catch (error) {
		console.log(error);
		handler(res, 400, error);
	}
};

module.exports = productsMethod;
