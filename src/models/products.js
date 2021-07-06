const { json } = require('body-parser');
const { exists } = require('fs');
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

productDB.sortNewest = () => {
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

productDB.sortOldest = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM public.fashion ORDER BY id')
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

productDB.sortPriceExpensive = () => {
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

productDB.sortPriceCheapest = () => {
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

productDB.changeRating = (data) => {
	return new Promise((resolve, reject) => {
		db.query('select exists(select 1 from fashion where id=$1) AS update', [
			data.id,
		])
			.then((res) => {
				db.query('UPDATE fashion SET rating = $1 where id = $2', [
					data.rating,
					data.id,
				]);
				resolve(res.rows);
			})
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});
};

module.exports = productDB;
