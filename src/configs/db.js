const { Pool } = require('pg');

const pool = new Pool({
	user: 'calvin',
	host: 'localhost',
	database: 'product',
	password: 'grand312',
	port: 5432,
});

module.exports = pool;
