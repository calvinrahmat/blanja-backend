const sellerMethod = {};
const modelSeller = require('../models/seller');
const handler = require('../helpers/errorhandler');

sellerMethod.sellerRegistration = async (req, res) => {
	try {
		const check = await modelSeller.getByEmail(req.body.email);

		if (check.length > 0) {
			return handler(res, 200, { msg: 'email sudah terdaftar !' });
		}
		const result = await modelSeller.addData(req.body);
		return handler(res, 200, result);
	} catch (error) {
		console.log(error);
		return handler(res, 500, error, true);
	}
};

sellerMethod.resetPassword = async (req, res) => {
	try {
		const check = await modelSeller.getByEmail(req.body.email);
		if (check.length <= 0) {
			return handler(res, 200, { msg: 'email tidak terdaftar !' });
		}
		const result = await modelSeller.addPass(req.body);
		console.log(result);
		return handler(res, 200, result);
	} catch (error) {
		return handler(res, 500, error, true);
	}
};

module.exports = sellerMethod;
