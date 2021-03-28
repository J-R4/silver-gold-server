'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transaction.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          message: `The id cannot be empty`
        }
      }
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          message: `The id cannot be empty`
        }
      }
    },
    date: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Transaction',
  }),
    Transaction.addHook('beforeCreate', (tr, opt) => {
      const dtf = new Intl.DateTimeFormat(this.locale, {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: this.enableSeconds ? 'numeric' : undefined,
                timezone: 'UTC'
            })
      tr.date = dtf.format(new Date())
    })
  return Transaction;
};