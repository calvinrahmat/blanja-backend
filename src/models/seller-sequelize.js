const { DataTypes } = require('sequelize');
const sequelize = require('../configs/sequelize');

class Sellers {
	constructor() {
		this.table = sequelize.define('sellers', {
			seller_id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			pass: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			store_name: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			phone_number: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			store_desc: {
				type: DataTypes.STRING,
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
		});
	}
	update(data) {
		return new Promise((resolve, reject) => {
			const { store_name, email, phone_number, store_desc, seller_id } = data;
			this.table
				.update(
					{ store_name, email, phone_number, store_desc },
					{
						where: {
							seller_id: seller_id,
						},
					}
				)
				.then((res) => {
					resolve({ msg: 'Store Profile updated' });
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	getId(id) {
		return new Promise((resolve, reject) => {
			this.table
				.findAll({ where: { seller_id: id } })
				.then((res) => {
					resolve(res);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
}

module.exports = new Sellers();
