const request = require('supertest');
const app = require('../app');

const standardResponse = {
	status: expect.any(Number),
	description: expect.any(String),
	data: expect.any(Array),
};

const tokenError = 'tokenerror';
const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiY2FsdmluQHlhaG9vLmNvbSIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTYyNjgzOTc0MiwiZXhwIjoxNjI2ODQzMzQyfQ.4y7PwPILTL0feUZthHtjmexVTuAhmhmzjtK7Jaijme0';

describe('service /bag', () => {
	describe('GET /bag', () => {
		test('should get all item in bag, return status code 200 with standard response', async () => {
			const response = await request(app).get('/bag').set({ tokenauth: token });
			expect(response.statusCode).toBe(200);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data).toEqual(
				expect.arrayContaining([
					expect.objectContaining({ nama: expect.any(String) }),
				])
			);
		});
		test('should return message JsonWebTokenError, status code 400 if the user does not login', async () => {
			const response = await request(app)
				.get('/bag')
				.set({ tokenauth: tokenError });
			expect(response.statusCode).toBe(400);
			expect(response.body.data.name).toMatch('JsonWebTokenError');
		});
	});

	describe('DELETE /bag/del', () => {
		test('should delete item in bag, return status code 200 with standard response', async () => {
			const response = await request(app)
				.delete('/bag/del')
				.set({ tokenauth: token })
				.query({ id: 16 });
			expect(response.body.data[0].msg).toMatch('item deleted');
		});
		test('should return message no item deleted, status code 400, with standard response', async () => {
			const response = await request(app)
				.delete('/bag/del')
				.set({ tokenauth: token })
				.query({ id: 9999 });
			expect(response.statusCode).toBe(400);
			expect(response.body.data[0].msg).toMatch('no item deleted');
		});
	});
});
