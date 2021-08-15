const db = require('../configs/db');
const myBagDB = {};

myBagDB.getAllBag = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT *, harga * qty AS total FROM bag ORDER BY bag_id DESC ')
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});
};

myBagDB.delete = (bag_id) => {
	return new Promise((resolve, reject) => {
		db.query(`DELETE FROM bag WHERE bag_id = ${bag_id} `)
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

myBagDB.getID = (bag_id) => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM bag WHERE bag_id = ${bag_id}`)
			.then((res) => {
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
				console.log(res.rows);
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

module.exports = myBagDB;
