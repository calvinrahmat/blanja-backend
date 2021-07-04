const db = require('../configs/db');
const productDB = {};

productDB.getAll = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM public.fashion ORDER BY id DESC')
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

productDB.addData = (data) => {
	return new Promise((resolve, reject) => {
		db.query('INSERT INTO tutorial (name, price) VALUES ($1, $2)', [
			data.name,
			data.price,
		])
			.then((res) => {
				resolve(data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

productDB.filterCategory = (category) => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM public.fashion WHERE kategori = ${category}`)
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

module.exports = productDB;
