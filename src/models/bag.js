const db = require('../configs/db');
const myBagDB = {};

myBagDB.getAllBag = (email) => {
	return new Promise((resolve, reject) => {
		db.query(
			`SELECT *, harga * qty AS total FROM bag WHERE email = '${email}' ORDER BY bag_id DESC `
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
		db.query('UPDATE bag SET qty = $1,img=$2 where bag_id =$3', [
			item.qty,
			item.img,
			item.bag_id,
		])
			.then((res) => {
				resolve(item);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

myBagDB.totalQty = (email) => {
	return new Promise((resolve, reject) => {
		db.query(`select SUM(qty) as total_qty  from bag where email = '${email}' `)
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

myBagDB.totalPrice = (email) => {
	return new Promise((resolve, reject) => {
		db.query(
			`select SUM(total) as total_price  from bag where email = '${email}' `
		)
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

module.exports = myBagDB;
