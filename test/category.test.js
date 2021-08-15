const request = require('supertest');

const app = require('../app');

const standardResponse = {
	status: expect.any(Number),
	description: expect.any(String),
	data: expect.any(Array),
};

const existingCategory = 'Outerwear Pria';

const randomKategori1 = 'random kategori 1' + Date.now();

describe('service/category', () => {
	describe('POST/addCategory', () => {
		test('should post category, return status code 200, and with standard response', async () => {
			const response = await request(app)
				.post('/category/addCategory')
				.send({ nama_kategori: randomKategori1 });
			expect(response.statusCode).toBe(200);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data[0].msg).toMatch('category added successfully');
		});
		test('should return status code 500, message: Cannot add existing category with standard response', async () => {
			const response = await request(app)
				.post('/category/addCategory')
				.send({ nama_kategori: existingCategory });
			expect(response.statusCode).toBe(500);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data[0].msg).toMatch('Cannot add existing category');
		});
	});
	describe('PUT/updateCategory', () => {
		test('should update category in database, return status code 200, give message Update Category Successfull with standard response', async () => {
			const response = await request(app)
				.put('/category/updateCategory')
				.send({ nama_kategori: 'kategori test', kategori_id: 259 });
			expect(response.statusCode).toBe(200);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data[0].msg).toMatch(
				'Category Updated Successfully'
			);
		});
		test('should give message update category failed if no category can be deleted, give status code 500 with standard response', async () => {
			const response = await request(app)
				.put('/category/updateCategory')
				.send({ nama_kategori: 'baju olahraga', kategori_id: 9999 });
			expect(response.statusCode).toBe(500);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data[0].msg).toMatch('Update Category Failed');
		});
	});

	describe('DELETE/category', () => {
		test.skip('should delete category in database', async () => {
			const response = await request(app)
				.delete('/category/delete')
				.query({ id: 259 });

			expect(response.statusCode).toBe(200);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data[0].msg).toMatch('category deleted');
		});
		test('should give message delete category failed if no category can be deleted', async () => {
			const response = await request(app)
				.delete('/category/delete')
				.query({ id: 500 });
			expect(response.statusCode).toBe(500);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data[0].msg).toMatch('Delete Category Failed');
		});
	});
});
