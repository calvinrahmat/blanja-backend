const db = require('../configs/db');
const mybagDB = {};

mybagDB.getAll = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM bag')
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
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
		db.query('DELETE FROM bag WHERE id = CAST($1 AS varchar)', [item.id])
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

module.exports = mybagDB;

//'SELECT * FROM public.bag ORDER BY id DESC'
//'INSERT INTO bag(total) SELECT SUM(harga) FROM public.bag ',
//SELECT NAME, (CAST (harga AS INT) * CAST (qty AS INT)) AS total FROM public.bag'
