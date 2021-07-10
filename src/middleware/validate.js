const handler = require('../helpers/errorhandler');
const jwt = require('jsonwebtoken');

const checkToken = (role) => {
	return (req, res, next) => {
		const { tokenauth } = req.headers;
		if (!tokenauth) {
			handler(res, 400, { msg: 'please login first' });
		}
		jwt.verify(tokenauth, process.env.JWT_KEY, (err, decode) => {
			if (err) {
				handler(res, 400, err);
			}
			if (decode.role === role) {
				next();
			} else {
				handler(res, 400, { msg: 'Unauthorized' });
			}
		});
	};
};

module.exports = checkToken;
