const express = require('express');
const app = express();
const morgan = require('morgan');
const main = require('./src/main');
const database = require('./src/configs/db');
const PORT = 7123;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(main);

database
	.connect()
	.then(() => {
		app.listen(PORT, () => {
			console.log('connection to db established');
			console.log(`listening on port ${PORT}`);
		});
	})
	.catch(() => {
		console.log('gagal connection database');
	});
