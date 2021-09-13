require('dotenv').config();

const request = require('supertest');
const app = require('../app');

const standardResponse = {
	status: expect.any(Number),
	description: expect.any(String),
	data: expect.any(Array),
};

const mockProductName = 'shirt';
const mockProductSeller = 'Erigo';

describe('service /products', () => {
	describe('GET /products', () => {
		test('should get all products, return status code 200 with response standard', async () => {
			const response = await request(app).get('/api/products');
			expect(response.statusCode).toBe(200);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data).toEqual(
				expect.arrayContaining([
					expect.objectContaining({ nama: expect.any(String) }),
				])
			);
		});
	});

	describe('GET /products/search/seller', () => {
		test('should search product by seller successfully, give status code 200 with response standard', async () => {
			const response = await request(app)
				.get('/api/products/search/seller')
				.query({ st: mockProductSeller });
			expect(response.statusCode).toBe(200);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data[0].nama).toMatch(new RegExp(mockProductSeller));
		});
	});

	describe('GET /products/sort', () => {
		test('should sort products by name descending successfully, return status code 200 with standard response', async () => {
			const response = await request(app)
				.get('/api/products/sort')
				.query({ ob: 4 });
			expect(response.statusCode).toBe(200);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data.length).toBeGreaterThan(0);
		});
		test('should sort products by name ascending successfully, return status code 200 with standard response', async () => {
			const response = await request(app)
				.get('/api/products/sort')
				.query({ ob: 3 });
			expect(response.statusCode).toBe(200);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data.length).toBeGreaterThan(0);
		});
		test('should sort products by price cheapest to expensive successfully, return status code 200 with standard response', async () => {
			const response = await request(app)
				.get('/api/products/sort')
				.query({ ob: 2 });
			const length = response.body.data.length;
			expect(response.statusCode).toBe(200);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data[0].harga).toBeLessThanOrEqual(
				response.body.data[length - 1].harga
			);
		});
		test('should sort products by price expensive to cheapest successfully, return status code 200 with standard response', async () => {
			const response = await request(app)
				.get('/api/products/sort')
				.query({ ob: 1 });
			const length = response.body.data.length;
			expect(response.statusCode).toBe(200);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data[0].harga).toBeGreaterThanOrEqual(
				response.body.data[length - 1].harga
			);
		});
		test('should sort products by newest to oldest successfully, return status code 200 with standard response', async () => {
			const response = await request(app)
				.get('/api/products/sort')
				.query({ ob: 5 });
			const length = response.body.data.length;
			expect(response.statusCode).toBe(200);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(parseInt(response.body.data[0].id)).toBeGreaterThan(
				parseInt(response.body.data[length - 1].id)
			);
		});
	});
});
