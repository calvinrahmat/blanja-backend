 const app = require('./app');
const database = require('./src/configs/db');
const PORT = 7123;
const redis = require('./src/configs/redis');
const logger = require('./src/helpers/logger');
const orm = require('./src/configs/sequelize');

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

async function sequelize() {
	try {
		await orm.authenticate();
		await orm.sync({ alter: true });
		logger.info('connection to database (sequelize) established');
	} catch (error) {
		logger.error(
			'connection to database (sequelize) sequelize failed: ',
			error
		);
	}
}

sequelize();
