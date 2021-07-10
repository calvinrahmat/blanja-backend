const handler = require('../helpers/errorhandler');
const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
	const { tokenauth } = req.headers;
	if (!tokenauth) {
		handler(res, 400, { msg: 'please login first' });
	}
	jwt.verify(tokenauth, process.env.JWT_KEY, (err, decode) => {
		if (err) {
			handler(res, 400, err);
		}
		if (decode.role === 'customer') {
			next();
		}
		handler(res, 400, { msg: 'Unauthorized' });
	});
};

module.exports = checkToken;
