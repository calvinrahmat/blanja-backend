const db = require('../configs/db');
const myBagDB = {};

myBagDB.getAll = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT *, harga * qty AS total FROM bag ORDER BY ID DESC ')
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});
};

myBagDB.delete = (item) => {
	return new Promise((resolve, reject) => {
		db.query('select exists(select 1 from bag where id=$1) AS delete', [item])
			.then((res) => {
				db.query('DELETE FROM bag WHERE id = $1', [item]);
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

myBagDB.updateQty = (item) => {
	return new Promise((resolve, reject) => {
		db.query('select exists(select 1 from bag where id=$1) AS update', [
			item.id,
		])
			.then((res) => {
				db.query('UPDATE bag SET qty = $1 where id =$2', [item.qty, item.id]);
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

module.exports = myBagDB;
