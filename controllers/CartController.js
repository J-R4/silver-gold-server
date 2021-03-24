const { User, Product, Cart } = require('../models/index.js');

class CartController {
    static carts = async (req, res, next) => {
        try {
          let carts = await Cart.findAll({
            where: {
                UserId: req.currentUser.id
              }
            });
            if (carts === undefined) {
                throw {
                    status: 404,
                    message: `Not Found`,
                };
            }
            res.status(200).json({ carts });
        } catch (err) {
            next(err);
        }
    };

    static postCart = async (req, res, next) => {
        try {
            let {ProductId, quantity} = req.body;
            let obj = {
                quantity,
                UserId: req.currentUser.id,
                ProductId,
            };

            let cart = await Cart.create(obj);

            if (!cart) {
                throw {
                    status: 400,
                    message: `Bad Request`,
                };
            }

            res.status(201).json({ cart });
        } catch (err) {
            next(err);
        }
    };

    static getOne = async (req, res, next) => {
        try {
            let target = +req.params.id;
            let cart = await Cart.findByPk(target);

            if (!cart) {
                throw {
                    status: 404,
                    message: `cannot find the id / cart`,
                };
            }
            res.status(200).json({ cart });
        } catch (err) {
            next(err);
        }
    };

    static put = async (req, res, next) => {
        try {
            let target = +req.params.id;
            let {quantity} = req.body;
            let obj = {
                UserId: req.currentUser,
                ProductId: target,
                quantity
            };

            let product = await Product.findByPk(target)

            if (quantity > product.stock) {
                throw ({
                    status: 400,
                    message: `The Quantity cannot be higher than the stock`
                })
            }

            let cart = await Cart.findByPk(target);

            if (!cart) {
                throw {
                    status: 404,
                    message: `data not found`,
                };
            }

            let update = await Cart.update(obj, {
                where: { id: target },
                returning: true,
            });

            if (!update[0]) {
                throw {
                    status: 400,
                    message: `Error in validation`,
                };
            }
            res.status(200).json({ update });
        } catch (err) {
            next(err);
        }
    };

    static patch = async (req, res, next) => {
        try {
            let target = +req.params.id;
            let data = { quantity: req.body.quantity };
            let cart = await Cart.findByPk(target);

            let product = await Product.findByPk(target)

            if (data.quantity > product.stock) {
                throw ({
                    status: 400,
                    message: `The Quantity cannot be higher than the stock`
                })
            }

            if (!cart) {
                throw {
                    status: 404,
                    message: `data not found`,
                };
            }

            let update = await Cart.update(data, {
                where: {
                    id: target,
                },
                returning: true,
            });

            if (!update[0]) {
                throw {
                    status: 400,
                    message: `Error in validation`,
                };
            }

            res.status(200).json({ update });
        } catch (err) {
            next(err);
        }
    };

    static delete = async (req, res, next) => {
        try {
            let target = +req.params.id;

            let cart = await Cart.findByPk(target);

            if (!cart) {
                throw {
                    status: 404,
                    message: `data not found`,
                };
            }

            let begone = await Cart.destroy({
                where: {
                    id: target,
                },
            });
            res.status(200).json({ message: `Cart with id ${target} has been deleted` });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = CartController;
