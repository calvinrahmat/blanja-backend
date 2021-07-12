require('dotenv/config');
const express = require('express');
const app = express();
const morgan = require('morgan');
const main = require('./src/main');
const database = require('./src/configs/db');
const PORT = 7123;
const redis = require('./src/configs/redis');
const logger = require('./src/helpers/logger');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(main);

async function init() {
	try {
		await database.connect();
		const msg = await redis.check();
		app.listen(PORT, () => {
			logger.info(
				`connection to Postgre established listening on port ${PORT}`
			);
			logger.info(msg);
		});
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
}

init();
