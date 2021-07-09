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

productDB.filterStore = (data) => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM public.fashion WHERE seller ILIKE $1 ', [
			'%' + data + '%',
		])
			.then((res) => {
				console.log(data);
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

productDB.addItemBag = (data) => {
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

productDB.changeProduct = (data) => {
	return new Promise((resolve, reject) => {
		db.query(
			'UPDATE fashion SET nama = $1, seller = $2, kategori = $3, kategori_id = $4, harga = $5, rating = $6, img = $7 WHERE id = $8',
			[
				data.nama,
				data.seller,
				data.kategori,
				data.kategori_id,
				data.harga,
				data.rating,
				data.img,
				data.id,
			]
		)
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

productDB.getCategory = (data) => {
	return new Promise((resolve, reject) => {
		db.query('select * from category order by id desc')
			.then((res) => {
				resolve(data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

productDB.delete = (data) => {
	return new Promise((resolve, reject) => {
		db.query('select exists(select 1 from fashion where id = $1) AS delete', [
			data,
		])
			.then((res) => {
				db.query('DELETE FROM fashion WHERE id = $1', [data]);
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

productDB.addProduct = (data) => {
	return new Promise((resolve, reject) => {
		db.query(
			'INSERT INTO fashion (nama,seller,kategori,kategori_id,harga,rating,img) VALUES ($1,$2,$3,$4,$5,$6,$7)',
			[
				data.nama,
				data.seller,
				data.kategori,
				data.kategori_id,
				data.harga,
				data.rating,
				data.img,
			]
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

module.exports = productDB;
