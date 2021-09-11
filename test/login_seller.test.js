require('dotenv').config();
const request = require('supertest');
const app = require('../app');

const standardResponse = {
	status: expect.any(Number),
	description: expect.any(String),
	data: expect.any(Array),
};

const existedEmailInDatabase = 'tes@gmail.com';
const existedPassInDatabase = 'abcd1234';

describe('POST /login/seller', () => {
	test('should return token, message: login success, status code 200, with standard response if the user give correct pass and email', async () => {
		const response = await request(app)
			.post('/api/login/seller')
			.send({ email: existedEmailInDatabase, pass: existedPassInDatabase });
		expect(response.statusCode).toBe(200);
		expect(response.body).toEqual(expect.objectContaining(standardResponse));
		expect(response.body.data[0].msg).toMatch('Login Success');
		expect(response.body.data[0].token).toMatch(new RegExp('$'));
	});
});
