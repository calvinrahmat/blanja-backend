const db = require('../configs/db');
const mybagDB = {};

mybagDB.addData = (data) => {
	return new Promise((resolve, reject) => {
		db.query('INSERT INTO bag ( name,price,seller,qty) VALUES ($1, $2,$3,$4)', [
			data.name,
			data.price,
			data.seller,
			data.qty,
		])
			.then((res) => {
				resolve(data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

mybagDB.getAll = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM public.bag ORDER BY id DESC')
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

module.exports = mybagDB;
