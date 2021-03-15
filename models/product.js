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
            Product.belongsTo(models.User);
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
                    min: {
                        args: 0,
                        message: `Input cannot be a minus number`,
                    },
                    isNumeric: {
                        message: `Input can only be number`,
                    },
                },
            },
            stock: DataTypes.INTEGER,
            validate: {
                min: {
                    args: 0,
                    message: `Input cannot be minus number`,
                },
                isNumeric: {
                    message: `Input can only be number`,
                },
            },
        },
        {
            sequelize,
            modelName: 'Product',
        }
    );
    return Product;
};
