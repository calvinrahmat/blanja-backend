const loginMethod = {};
const modelUsers = require('../models/users');
const handler = require('../helpers/errorhandler');
const bcrypt = require('bcrypt');

loginMethod.login = async (req, res) => {
	try {
		const passDB = await modelUsers.getByEmail(req.body.email);
		const passUser = req.body.pass;
		const check = await bcrypt.compare(passUser, passDB[0].pass);
		if (check) {
			return handler(res, 200, { msg: 'Logged In !' });
		} else {
			return handler(res, 400, { msg: 'Wrong password or email !' });
		}
	} catch (error) {
		handler(res, 500, error);
	}
};

module.exports = loginMethod;
