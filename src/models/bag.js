const db = require('../configs/db');
const mybagDB = {};

mybagDB.getAll = () => {
	return new Promise((resolve, reject) => {
		db.query(
			'INSERT INTO total(total) SELECT SUM(CAST (harga AS INT) * CAST (qty AS INT))  FROM public.bag'
		)
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
		db.query('SELECT * FROM public.bag')
			.then((res) => {
				resolve(res.rows);
			})
			.catcht((err) => {
				reject(err);
			});
	});
};

module.exports = mybagDB;

//'SELECT * FROM public.bag ORDER BY id DESC'
//'INSERT INTO bag(total) SELECT SUM(harga) FROM public.bag ',
