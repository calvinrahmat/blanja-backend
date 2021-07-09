const db = require('../configs/db');
const usersDB = {};

usersDB.addData = (data) => {
	return new Promise((resolve, reject) => {
		db.query('INSERT INTO public.users (name, email, pass)VALUES($1, $2, $3)', [
			data.name,
			data.email,
			data.pass,
		])
			.then((res) => {
				resolve(data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

usersDB.getByEmail = (email) => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM public.users WHERE email='${email}'`)
			.then((res) => {
				resolve(res.rows);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

module.exports = usersDB;
