const ctrlBag = require('../controllers/bag');
const modelBag = require('../models/bag');
const helperhandler = require('../helpers/errorhandler');

describe('bag controller', () => {
	test.only('should get all product', async () => {
		modelBag.getAllBag = jest.fn(() => [
			{
				nama: 'test product',
				seller: 'test seller',
				id: 100,
				harga: 99999,
				qty: 100,
				total: 9999900,
				bag_id: 100,
			},
		]);
		const getAllProducts = ctrlBag.getAll();
	});
});
