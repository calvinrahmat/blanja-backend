const sellerMethod = {};
const modelSeller = require('../models/seller');
const handler = require('../helpers/errorhandler');
const hash = require('../helpers/hash');

sellerMethod.sellerRegistration = async (req, res) => {
	try {
		const check = await modelSeller.getByEmail(req.body.email);
		const hashedPass = await hash(req.body.pass);
		const dummyImg =
			'https://res.cloudinary.com/calvin-cloud/image/upload/v1626501995/users/user_meodkb.png';
		const data = {
			name: req.body.name,
			email: req.body.email,
			phone_number: req.body.phone_number,
			store_name: req.body.store_name,
			pass: hashedPass,
			img: dummyImg,
		};
		if (check.length > 0) {
			return handler(res, 200, {
				msg: 'register failed email already registered',
			});
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
			return handler(res, 200, { msg: 'email not registered' });
		}
		const result = await modelSeller.addPass(req.body);
		return handler(res, 200, { msg: 'reset password successfull' });
	} catch (error) {
		return handler(res, 500, error, true);
	}
};

sellerMethod.getProductSeller = async (req, res) => {
	try {
		const result = await modelSeller.getProductByEmail(req.params.email);
		const data = JSON.stringify(result);
		handler(res, 200, result);
	} catch (error) {
		console.log(error);
		handler(res, 400, error);
	}
};

sellerMethod.getUser = async (req, res) => {
	try {
		const result = await modelSeller.getByEmail(req.params.email);
		handler(res, 200, result);
	} catch (error) {
		console.log(error);
		handler(res, 400, error);
	}
};

sellerMethod.getSellerName = async (req, res) => {
	try {
		const result = await modelSeller.getSeller(req.params.email);
		handler(res, 200, result);
	} catch (error) {
		console.log(error);
		handler(res, 400, error);
	}
};

module.exports = sellerMethod;
