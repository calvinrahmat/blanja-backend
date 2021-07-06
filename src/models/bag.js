const db = require('../configs/db');
const mybagDB = {};

mybagDB.getAll = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT *, harga * qty AS total FROM bag')
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});
};

mybagDB.total = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT *, harga * qty AS total FROM bag')
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});
};

mybagDB.delete = (item) => {
	return new Promise((resolve, reject) => {
		db.query('DELETE FROM bag WHERE id = $1', [item.id])
			.then((res) => {
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

module.exports = mybagDB;
