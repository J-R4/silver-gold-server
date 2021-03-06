'use strict';
const { Model } = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.belongsToMany(models.Product, { through: 'Carts' })
            User.belongsToMany(models.Product, { through: 'Wishlists' })
            User.belongsToMany(models.Product, {through: 'Transactions'})
        }
    }
    User.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: `Name cannot be empty`,
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: `Email cannot be empty`,
                    },
                    isEmail: {
                        message: `The input must be an email`,
                    },
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: `Password cannot be empty`,
                    },
                    len: {
                        args: [6, 30],
                        message: `The input must have 6 to 30 characters`,
                    },
                },
            },
            role: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: 'User',
        }
    ),
        User.addHook('beforeCreate', (usr, opt) => {
            usr.password = hashPassword(usr.password);
            usr.role = `customer`;
        });
    return User;
};
