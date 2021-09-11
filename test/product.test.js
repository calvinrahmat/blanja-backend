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

describe('service api/products', () => {
	describe('GET api/products', () => {
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

	describe('GET api/products/search/nama', () => {
		test('should search product by  successfully, return status code 200 with standard response', async () => {
			const response = await request(app)
				.get('/api/products/search/nama')
				.query({ p: mockProductName });
			expect(response.statusCode).toBe(200);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data[0].nama).toMatch(new RegExp(mockProductName));
		});
		test('should return message no data available if the search failed, return status code 400 with standard response', async () => {
			const response = await request(app)
				.get('/api/products/search/nama')
				.query({ p: 'error' });
			expect(response.statusCode).toBe(400);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data[0].msg).toMatch('no data available');
		});
	});

	describe('GET api/products/search/seller', () => {
		test('should search product by seller successfully, give status code 200 with response standard', async () => {
			const response = await request(app)
				.get('/api/products/search/seller')
				.query({ st: mockProductSeller });
			expect(response.statusCode).toBe(200);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data[0].nama).toMatch(new RegExp(mockProductSeller));
		});
	});

	describe('GET api/products/sort', () => {
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
