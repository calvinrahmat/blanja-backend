const redis = require('redis');

class Redis {
	constructor() {
		this.redisDb = redis.createClient({
			host: process.env.REDIS_HOST,
			port: 6379,
		});
	}

	check() {
		return new Promise((resolve, reject) => {
			this.redisDb.get('testkey', (err, res) => {
				if (err) {
					reject(err);
				}

				if (res == 'OK' || res == null) {
					resolve('Connection to redis established');
				}
			});
		});
	}
}

module.exports = new Redis();
