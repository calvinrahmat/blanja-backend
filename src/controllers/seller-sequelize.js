const sellerMethod = {};
const sellerModel = require('../models/seller-sequelize.js');
const handler = require('../helpers/errorhandler');
const { uploadsStore } = require('../helpers/upload_cloud');

sellerMethod.updateStore = async (req, res) => {
	try {
		const check = await sellerModel.getId(req.body.seller_id);
		let urlImage = '';
		const dummyImg =
			'https://res.cloudinary.com/calvin-cloud/image/upload/v1626495737/store/store_dfnsjq.png';
		if (check.length <= 0) {
			return handler(res, 400, { msg: 'Update error wrong id' });
		} else if (req.file !== undefined) {
			urlImage = await uploadsStore(req.file.path);
		}
		const data = {
			store_name: req.body.store_name,
			email: req.body.email,
			phone_number: req.body.phone_number,
			store_desc: req.body.store_desc,
			seller_id: req.body.seller_id,
			img: urlImage || dummyImg,
		};
		const result = await sellerModel.update(data);
		handler(res, 200, result);
	} catch (error) {
		console.log(error);
		handler(res, 400, error);
	}
};

module.exports = sellerMethod;
