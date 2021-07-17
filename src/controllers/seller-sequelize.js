const sellerMethod = {};
const sellerModel = require('../models/seller-sequelize.js');
const handler = require('../helpers/errorhandler');

sellerMethod.updateStore = async (req, res) => {
	try {
		const check = await sellerModel.getId(req.body.seller_id);
		console.log(check);
		if (check.length <= 0) {
			return handler(res, 400, { msg: 'Update error wrong id' });
		}
		const data = {
			store_name: req.body.store_name,
			email: req.body.email,
			phone_number: req.body.phone_number,
			store_desc: req.body.store_desc,
			seller_id: req.body.seller_id,
		};
		console.log(data);
		const result = await sellerModel.update(data);
		handler(res, 200, result);
	} catch (error) {
		console.log(error);
		handler(res, 400, error);
	}
};

module.exports = sellerMethod;
