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
		}, 30000);
	});

	describe('GET /products/search/seller', () => {
		test('should search product by seller successfully, give status code 200 with response standard', async () => {
			const response = await request(app)
				.get('/api/products/search/seller')
				.query({ st: mockProductSeller });
			expect(response.statusCode).toBe(200);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data[0].nama).toMatch(new RegExp(mockProductSeller));
		}, 30000);
	});
});
