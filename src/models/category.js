const db = require('../configs/db');
const categoryDB = {};

categoryDB.getCategory = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * from public.category')
			.then((res) => {
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

categoryDB.addItem = (data) => {
	return new Promise((resolve, reject) => {
		db.query('INSERT INTO category (nama_kategori) VALUES ($1)', [
			data.nama_kategori,
		])
			.then((res) => {
				resolve(data);
			})
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});
};

categoryDB.changeCategory = (data) => {
	return new Promise((resolve, reject) => {
		db.query('UPDATE category SET nama_kategori = $1 where kategori_id = $2', [
			data.nama_kategori,
			data.kategori_id,
		])
			.then((res) => {
				resolve(data);
			})
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});
};

categoryDB.delete = (id) => {
	return new Promise((resolve, reject) => {
		db.query(`DELETE from category where kategori_id = ${id} `)
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

categoryDB.checkName = (name) => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM category WHERE nama_kategori = '${name}'`)
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

categoryDB.checkID = (id) => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM category WHERE kategori_id = ${id}`)
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

module.exports = categoryDB;
