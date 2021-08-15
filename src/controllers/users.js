const userMethod = {};
const modelUser = require('../models/users');
const handler = require('../helpers/errorhandler');
const hash = require('../helpers/hash');

userMethod.userRegistration = async (req, res) => {
	try {
		const check = await modelUser.getByEmail(req.body.email);
		const hashedPass = await hash(req.body.pass);
		const data = {
			name: req.body.name,
			email: req.body.email,
			pass: hashedPass,
		};
		if (check.length > 0) {
			return handler(res, 200, {
				msg: 'register failed email already registered',
			});
		}
		const result = await modelUser.addData(data);
		return handler(res, 200, result);
	} catch (error) {
		console.log(error);
		return handler(res, 500, error, true);
	}
};

userMethod.resetPassword = async (req, res) => {
	try {
		const check = await modelUser.getByEmail(req.body.email);
		if (check.length <= 0) {
			return handler(res, 200, { msg: 'email not registered' });
		}
		const result = await modelUser.addPass(req.body);
		return handler(res, 200, { msg: 'reset password successfull' });
	} catch (error) {
		return handler(res, 500, error, true);
	}
};

userMethod.getAll = async (req, res) => {
	try {
		const result = await modelUser.getAll();
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

userMethod.getUser = async (req, res) => {
	try {
		const result = await modelUser.getByEmail(req.params.email);
		handler(res, 200, result);
	} catch (error) {
		handler(res, 400, error);
	}
};

module.exports = userMethod;
