const db = require('../configs/db');
const categoryDB = {};

categoryDB.getCategory = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * from public.category')
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

categoryDB.addItem = (data) => {
	return new Promise((resolve, reject) => {
		db.query(
			'INSERT INTO category (kategori_id, nama_kategori) VALUES ($1,$2)',
			[data.kategori_id, data.nama_kategori]
		)
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
		db.query(
			'select exists(select 1 from category where kategori_id=$1) AS update',
			[data.kategori_id]
		)
			.then((res) => {
				db.query(
					'UPDATE category SET nama_kategori = $1 where kategori_id = $2',
					[data.nama_kategori, data.kategori_id]
				);
				resolve(res.rows);
			})
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});
};

categoryDB.delete = (data) => {
	return new Promise((resolve, reject) => {
		db.query(
			'select exists(select 1 from category where kategori_id = $1) AS delete',
			[data]
		)
			.then((res) => {
				db.query('DELETE FROM category WHERE kategori_id = $1', [data]);
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

module.exports = categoryDB;
