const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
	username: process.env.DB_USERS,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASS,
	port: 5432,
	dialect: 'postgres',
	logging: true,
});

module.exports = sequelize;
