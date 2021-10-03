const db = require('../configs/db');

const productDB = {};

productDB.getAll = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM public.fashion ORDER BY id DESC LIMIT 15')
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

productDB.getAllPopular = () => {
	return new Promise((resolve, reject) => {
		db.query(
			'SELECT * FROM public.fashion ORDER BY id WHERE RATING=5 DESC LIMIT 15'
		)
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
		db.query(
			`SELECT * FROM public.fashion WHERE kategori_id = ${cat_id}  ORDER BY id DESC LIMIT 15 `
		)
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
		db.query(
			'SELECT * FROM public.fashion WHERE seller ILIKE $1  ORDER BY id DESC LIMIT 15',
			['%' + data + '%']
		)
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
		db.query(
			'SELECT * FROM public.fashion WHERE nama ILIKE $1  ORDER BY id DESC LIMIT 15',
			['%' + key + '%']
		)
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
		db.query('SELECT * FROM public.fashion ORDER BY id DESC LIMIT 15')
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
		db.query('SELECT * FROM public.fashion ORDER BY id LIMIT 15 ')
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
		db.query('SELECT * FROM public.fashion ORDER BY harga DESC LIMIT 15')
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
		db.query('SELECT * FROM public.fashion ORDER BY harga LIMIT 15')
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
		db.query('SELECT * FROM public.fashion ORDER BY nama LIMIT 15')
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
		db.query('SELECT * FROM public.fashion ORDER BY nama DESC LIMIT 15')
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
			'INSERT INTO bag (nama,seller,harga,id,img,qty,email) SELECT nama,seller,harga,id,img,$1,$2 FROM fashion WHERE id = $3',
			[data.qty, data.email, data.id]
		)
			.then((res) => {
				console.log(data);
				resolve(data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

productDB.changeProduct = (item) => {
	return new Promise((resolve, reject) => {
		db.query(
			'UPDATE fashion SET nama = $1, seller = $2, kategori = $3, kategori_id = $4, harga = $5, img = $6,stock=$7, product_desc=$8 WHERE id = $9',
			[
				item.nama,
				item.seller,
				item.kategori,
				item.kategori_id,
				item.harga,
				item.img,
				item.stock,
				item.product_desc,
				item.id,
			]
		)
			.then((res) => {
				console.log(item);
				resolve(item);
			})
			.catch((err) => {
				console.log(err);
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

productDB.delete = (id) => {
	return new Promise((resolve, reject) => {
		db.query(`DELETE FROM fashion WHERE id = ${id}`)
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

productDB.addProduct = (data) => {
	console.log(data);
	return new Promise((resolve, reject) => {
		db.query(
			'INSERT INTO fashion (nama,seller,kategori,kategori_id,harga,img,stock,product_desc,email) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)',
			[
				data.nama,
				data.seller,
				data.kategori,
				data.kategori_id,
				Number(data.harga),
				data.img,
				data.stock,
				data.product_desc,
				data.email,
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

productDB.getId = (id) => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM fashion WHERE id = ${id}`)
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

productDB.getCategoryId = (id) => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM category where kategori_id = ${id}`)
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

module.exports = productDB;
