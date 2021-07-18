const hash = require('./hash');

describe('helpers/hash', () => {
	test('should return random character with special character', async () => {
		const result = await hash('testes');
		expect(result).toEqual(expect.stringContaining('$'));
	});
	test('should return error when params is not provided', async () => {
		try {
			const result = await hash();
			expect(result).toBe(false);
		} catch (error) {
			expect(error.message).toBe('data and salt arguments required');
		}
	});
});
