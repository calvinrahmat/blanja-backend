const db = require('../configs/db');
const mybagDB = {};

mybagDB.getAll = () => {
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
		db.query('select exists(select 1 from bag where id=$1) AS delete', [
			item.id,
		])
			.then((res) => {
				db.query('DELETE FROM bag WHERE id = $1', [item.id]);
				resolve(res.rows);
			})
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});
};

mybagDB.updateQty = (item) => {
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

module.exports = mybagDB;
