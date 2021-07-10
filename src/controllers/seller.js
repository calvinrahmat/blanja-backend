const sellerMethod = {};
const modelSeller = require('../models/seller');
const handler = require('../helpers/errorhandler');
const hash = require('../helpers/hash');

sellerMethod.sellerRegistration = async (req, res) => {
	try {
		const check = await modelSeller.getByEmail(req.body.email);
		const hashedPass = await hash(req.body.pass);
		const data = {
			name: req.body.name,
			email: req.body.email,
			phone_number: req.body.phone_number,
			store_name: req.body.store_name,
			pass: hashedPass,
		};
		if (check.length > 0) {
			return handler(res, 200, { msg: 'email sudah terdaftar !' });
		}
		const result = await modelSeller.addData(data);
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
