const request = require('supertest');

const app = require('../app');

const standardResponse = {
	status: expect.any(Number),
	description: expect.any(String),
	data: expect.any(Array),
};

const testName = 'test test';
const testEmail = 'user.test@test.com';
const testPass = 'abcd1234';
const wrongEmail = 'error@error.com';
const wrongPass = 'errorpass';

describe('service /user', () => {
	describe('POST /user/registration', () => {
		test('should give message successfully add new user, status code 200 with standard response', async () => {
			const response = await request(app).post('/user/registration').send({
				name: testName,
				email: testEmail,
				pass: testPass,
			});
			expect(response.statusCode).toBe(200);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data[0].msg).toMatch('successfully add new user');
		});
		test('should return message email already registered, status code 500, with standard response if the user give the existing email', async () => {
			const response = await request(app).post('/user/registration').send({
				name: testName,
				email: testEmail,
				pass: testPass,
			});
			expect(response.statusCode).toBe(200);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data[0].msg).toMatch(
				'register failed email already registered'
			);
		});
	});

	describe('PUT /user/reset-password', () => {
		test('should return message reset password successful,status code 200, with standard response', async () => {
			const response = await request(app).put('/user/reset-password').send({
				email: testEmail,
				pass: testPass,
			});
			expect(response.statusCode).toBe(200);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data[0].msg).toMatch('reset password successfull');
		});
		test('should return message email not registered,status code 200, with standard response if the user enter the unregistered email', async () => {
			const response = await request(app).put('/user/reset-password').send({
				email: wrongEmail,
				pass: wrongPass,
			});
			expect(response.statusCode).toBe(200);
			expect(response.body).toEqual(expect.objectContaining(standardResponse));
			expect(response.body.data[0].msg).toMatch('email not registered');
		});
	});
});
