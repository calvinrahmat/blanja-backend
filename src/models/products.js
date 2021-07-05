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

productDB.filterCategory = (cat_id) => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM public.fashion WHERE kategori_id = ${cat_id}`)
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});
};

productDB.search = (key) => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM public.fashion WHERE nama ILIKE $1', [
			'%' + key + '%',
		])
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});
};

productDB.sortPriceDesc = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM public.fashion ORDER BY harga DESC')
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

productDB.sortPriceAsc = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM public.fashion ORDER BY harga')
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

productDB.sortNameAsc = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM public.fashion ORDER BY nama')
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

productDB.sortNameDesc = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM public.fashion ORDER BY nama DESC')
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};
productDB.addItem = (data) => {
	return new Promise((resolve, reject) => {
		db.query(
			'INSERT INTO bag (nama,seller,harga,id,img,qty) SELECT nama,seller,harga,id,img,$1 FROM fashion WHERE id = $2',
			[data.qty, data.id]
		)
			.then((res) => {
				resolve(data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

module.exports = productDB;

//INSERT INTO bag (nama,seller,harga,id) SELECT nama,seller,harga,id FROM fashion WHERE id = 90
//SELECT * FROM public.fashion WHERE POSITION ( $1 IN kategori) > 0
