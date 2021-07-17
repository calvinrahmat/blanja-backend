const { DataTypes } = require('sequelize');
const sequelize = require('../configs/sequelize');

class Users {
	constructor() {
		this.table = sequelize.define('users', {
			user_id: {
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
			dob: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			address: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			gender: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			phone_number: {
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
			const { dob, address, gender, phone_number, user_id } = data;
			this.table
				.update(
					{ dob, address, gender, phone_number },
					{
						where: {
							user_id: user_id,
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
	getId(id) {
		return new Promise((resolve, reject) => {
			this.table
				.findAll({ where: { user_id: id } })
				.then((res) => {
					resolve(res);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
}

module.exports = new Users();
