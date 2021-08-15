const handler = require('./errorhandler');

const res = {
	obj: {},
	statusCode: 0,
	status(status) {
		this.statusCode = status;
		return this;
	},
	json(data) {
		this.obj = data;
		return this;
	},
};

describe('helpers/errorhandler', () => {
	test(' status code 200 should return OK', () => {
		const check = handler(res, 200, { msg: 'tes' });
		const { description } = check.obj;
		expect(description).toBe('OK');
	});
	test(' status code 201 should return Created', () => {
		const check = handler(res, 201, { msg: 'tes' });
		const { description } = check.obj;
		expect(description).toBe('Created');
	});
	test(' status code 400 should return Bad Request', () => {
		const check = handler(res, 400, { msg: 'tes' });
		const { description } = check.obj;
		expect(description).toBe('Bad Request');
	});
	test(' status code 401 should return Unauthorized', () => {
		const check = handler(res, 401, { msg: 'tes' });
		const { description } = check.obj;
		expect(description).toBe('Unauthorized');
	});

	test(' status code 500 should return Internal Server Error', () => {
		const check = handler(res, 500, { msg: 'tes' });
		const { description } = check.obj;
		expect(description).toBe('Internal Server Error');
	});
	test(' status code 501 should return Bad Gateway', () => {
		const check = handler(res, 501, { msg: 'tes' });
		const { description } = check.obj;
		expect(description).toBe('Bad Gateway');
	});
	test(' status code 304 should return Not Modified', () => {
		const check = handler(res, 304, { msg: 'tes' });
		const { description } = check.obj;
		expect(description).toBe('Not Modified');
	});
	test(' should return empty string if status code not registered', () => {
		const check = handler(res, 600, { msg: 'tes' });
		const { description } = check.obj;
		expect(description).toBe('');
	});
});
