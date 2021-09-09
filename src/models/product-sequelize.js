const { DataTypes } = require('sequelize');
const sequelize = require('../configs/sequelize');

class Products {
	constructor() {
		this.table = sequelize.define('products', {
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nama: {
				type: DataTypes.STRING(1000),
				allowNull: true,
			},
			seller: {
				type: DataTypes.STRING(1000),
				allowNull: true,
			},
			kategori: {
				type: DataTypes.STRING(1000),
				allowNull: true,
			},
			harga: {
				type: DataTypes.STRING(1000),
				allowNull: true,
			},
			rating: {
				type: DataTypes.STRING(1000),
				allowNull: true,
			},
			kategori_id: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			img: {
				type: DataTypes.STRING(1000),
				allowNull: true,
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: true,
			},
			updatedAt: {
				type: DataTypes.DATE,
				allowNull: true,
			},
			stock: {
				type: DataTypes.STRING(1000),
				allowNullL: true,
			},
			status: {
				type: DataTypes.STRING(1000),
				allowNullL: true,
			},
			product_desc: {
				type: DataTypes.STRING(1000),
				allowNullL: true,
			},
		});
	}
	addProduct(data) {
		return new Promise((resolve, reject) => {
			const {
				nama,
				seller,
				kategori,
				harga,
				rating,
				kategori_id,
				img,
				stock,
				status,
				product_desc,
				id,
			} = data;
			this.table
				.create(
					{
						nama,
						seller,
						kategori,
						harga,
						rating,
						kategori_id,
						img,
						stock,
						status,
						product_desc,
					},
					{
						where: {
							id: id,
						},
					}
				)
				.then((res) => {
					resolve({ msg: 'Profile updated' });
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	getAll() {
		return new Promise((resolve, reject) => {
			this.table
				.findAll()
				.then((res) => {
					resolve(res);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	getPopular() {
		return new Promise((resolve, reject) => {
			this.table
				.findAll()
				.then((res) => {
					resolve(res);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
}

module.exports = new Products();
