const loginMethod = {};
const modelUsers = require('../models/users');
const handler = require('../helpers/errorhandler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const token = async (email) => {
	try {
		const payload = {
			user: email,
			role: 'customer',
		};
		const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1h' });
		const result = {
			token: token,
			msg: 'token created login success !',
		};

		return result;
	} catch (error) {
		throw error;
	}
};

loginMethod.login = async (req, res) => {
	try {
		const passDB = await modelUsers.getByEmail(req.body.email);
		const passUser = req.body.pass;
		const check = await bcrypt.compare(passUser, passDB[0].pass);
		if (check) {
			const result = await token(req.body.email);
			return handler(res, 200, result);
		} else {
			return handler(res, 401, error, true);
		}
	} catch (error) {
		console.log(error);
		handler(res, 500, { msg: 'Wrong password or email !' });
	}
};

module.exports = loginMethod;
