const { User, Product, Transaction } = require('../models/index.js');

class TransController {
    static trans = async (req, res, next) => {
        try {
          let trans = await Transaction.findAll({
            where: {
                UserId: req.currentUser.id
              }
            });
            if (trans === undefined) {
                throw {
                    status: 404,
                    message: `Not Found`,
                };
            }
            res.status(200).json({ trans });
        } catch (err) {
            next(err);
        }
    };

    static postTrans = async (req, res, next) => {
        try {
            let { ProductId } = req.body;
            
            let obj = {
                UserId: req.currentUser,
                ProductId
            };

            let transaction = await Transaction.create(obj);

            if (!transaction) {
                throw {
                    status: 400,
                    message: `Bad Request`,
                };
            }

            res.status(201).json({ transaction });
        } catch (err) {
            next(err);
        }
    };

    static getOne = async (req, res, next) => {
        try {
            let target = +req.params.id;
            let transaction = await Transaction.findByPk(target);

            if (!transaction) {
                throw {
                    status: 404,
                    message: `cannot find the id / transaction`,
                };
            }
            res.status(200).json({ transaction });
        } catch (err) {
            next(err);
        }
    };

    static delete = async (req, res, next) => {
        try {
            let target = +req.params.id;

            let transaction = await Transaction.findByPk(target);

            if (!transaction) {
                throw {
                    status: 404,
                    message: `data not found`,
                };
            }

            let begone = await transaction.destroy({
                where: {
                    id: target,
                },
            });
            res.status(200).json({ message: `Transaction with id ${target} has been deleted` });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = TransController;
