'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Banner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Banner.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: `Title cannot be empty`
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: `Status cannot be empty`
        }
      }
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: `Image URL cannot be empty`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Banner',
  }),
    Banner.addHook('beforeCreate', (bnr, opt) => {
      bnr.status = `active`
    })
  return Banner;
};