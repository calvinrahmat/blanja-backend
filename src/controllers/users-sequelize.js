const usersMethod = {};
const usersModel = require('../models/users-sequelize.js');
const handler = require('../helpers/errorhandler');
const { uploadsUser } = require('../helpers/upload_cloud');

usersMethod.updateProfile = async (req, res) => {
	try {
		const check = await usersModel.getId(req.body.user_id);
		let urlImage = '';
		const dummyImg =
			'https://res.cloudinary.com/calvin-cloud/image/upload/v1626501995/users/user_meodkb.png';
		if (check.length <= 0) {
			return handler(res, 400, { msg: 'Update error wrong id' });
		} else if (req.file !== undefined) {
			urlImage = await uploadsUser(req.file.path);
		}
		const data = {
			dob: req.body.dob,
			address: req.body.address,
			gender: req.body.gender,
			phone_number: req.body.phone_number,
			user_id: req.body.user_id,
			name: req.body.name,
			img: urlImage,
		};
		const result = await usersModel.update(data);
		handler(res, 200, result);
	} catch (error) {
		console.log(error);
		handler(res, 400, error);
	}
};

module.exports = usersMethod;
