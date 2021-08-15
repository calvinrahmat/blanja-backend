const request = require('supertest');

const app = require('../app');

const standardResponse = {
	status: expect.any(Number),
	description: expect.any(String),
	data: expect.any(Array),
};

const existedEmailInDatabase = 'calvin@yahoo.com';
const existedPassInDatabase = 'abcd1234';
const wrongEmail = 'error@error.com';
const wrongPass = 'errorpass';

describe('POST /login/customer', () => {
	test('should return token, message: login success, status code 200, with standard response if the user give correct pass and email', async () => {
		const response = await request(app)
			.post('/login/customer')
			.send({ email: existedEmailInDatabase, pass: existedPassInDatabase });
		expect(response.statusCode).toBe(200);
		expect(response.body).toEqual(expect.objectContaining(standardResponse));
		expect(response.body.data[0].msg).toMatch('Login Success');
		expect(response.body.data[0].token).toMatch(new RegExp('$'));
	});
	test('should return message wrong password or email, status code 500, with standard response if the user give incorrect pass or email', async () => {
		const response = await request(app)
			.post('/login/customer')
			.send({ email: wrongEmail, pass: wrongPass });
		expect(response.statusCode).toBe(500);
		expect(response.body).toEqual(expect.objectContaining(standardResponse));
		expect(response.body.data[0].msg).toMatch(
			'Cannot login: wrong password or email'
		);
	});
});
