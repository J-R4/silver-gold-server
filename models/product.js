'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.belongsTo(models.Category)
            Product.belongsToMany(models.User, { through: 'Carts' })
            Product.belongsToMany(models.User, { through: 'Wishlists' })
            Product.belongsToMany(models.User, { through: 'Transactions' })
        }
    }
    Product.init(
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
            image_url: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: `Image URL cannot be empty`,
                    },
                    isUrl: {
                        message: `Image URL must be url formatted`,
                    },
                },
            },
            price: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                validate: {
                    notNull: {
                        message: `Price should be reasonable`,
                    },
                    isMore(value) {
                        if ((value) < 0) {
                            throw {
                                message: `input must be a positive number`
                            }
                        }
                    },
                    isNumeric: {
                        message: `Input must be in number`,
                    },
                },
            },
            stock: {
                type: DataTypes.INTEGER,
                validate: {
                    isMore(value) {
                        if ((value) < 0) {
                            throw {
                                message: `input must be a positive number`
                            }
                        }
                    },
                    isNumeric: {
                        message: `Input must be in number`,
                    },
                }
            }
        },
        {
            sequelize,
            modelName: 'Product',
        }
    )
    return Product;
};
