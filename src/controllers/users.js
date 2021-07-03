const usersMethod = {};

usersMethod.getAll = (req, res) => {
	res.send('hello from users controller');
};

module.exports = usersMethod;
