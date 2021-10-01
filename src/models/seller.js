const db = require('../configs/db');
const sellerDB = {};

sellerDB.addData = (data) => {
	return new Promise((resolve, reject) => {
		db.query(
			'INSERT INTO public.sellers (name, email, phone_number, pass,store_name,img)VALUES($1, $2, $3,$4,$5,$6)',
			[
				data.name,
				data.email,
				data.phone_number,
				data.pass,
				data.store_name,
				data.img,
			]
		)
			.then((res) => {
				console.log(data);
				resolve({ msg: 'successfully add new seller' });
			})
			.catch((err) => {
				reject(err);
			});
	});
};

sellerDB.getByEmail = (email) => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM public.sellers WHERE email='${email}'`)
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

sellerDB.getSeller = (email) => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT name FROM public.sellers WHERE email='${email}'`)
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

sellerDB.getProductByEmail = (email) => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM public.fashion WHERE email='${email}'`)
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

sellerDB.addPass = (data) => {
	return new Promise((resolve, reject) => {
		db.query(
			`UPDATE public.sellers SET pass='${data.pass}' where email='${data.email}'`
		)
			.then((res) => {
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

module.exports = sellerDB;
