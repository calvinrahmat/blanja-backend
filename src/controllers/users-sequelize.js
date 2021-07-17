const usersMethod = {};
const usersModel = require('../models/users-sequelize.js');
const handler = require('../helpers/errorhandler');

usersMethod.updateProfile = async (req, res) => {
	try {
		const check = await usersModel.getId(req.body.user_id);
		console.log(check);
		if (check.length <= 0) {
			return handler(res, 400, { msg: 'Update error wrong id' });
		}
		const data = {
			dob: req.body.dob,
			address: req.body.address,
			gender: req.body.gender,
			phone_number: req.body.phone_number,
			user_id: req.body.user_id,
		};
		console.log(data);
		const result = await usersModel.update(data);
		handler(res, 200, result);
	} catch (error) {
		console.log(error);
		handler(res, 400, error);
	}
};

module.exports = usersMethod;
