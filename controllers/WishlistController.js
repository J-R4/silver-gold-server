const { User, Product, Cart, Wishlist } = require('../models/index.js');

class WishlistController {
    static wish = async (req, res, next) => {
        try {
          let wish = await Wishlist.findAll({
            where: {
                UserId: req.currentUser.id
              }
            });
            if (wish === undefined) {
                throw {
                    status: 404,
                    message: `Not Found`,
                };
            }
            res.status(200).json({ wish });
        } catch (err) {
            next(err);
        }
    };

    static postWish = async (req, res, next) => {
        try {
            let {ProductId} = req.body;
            let obj = {
                UserId: req.currentUser.id,
                ProductId,
            };

            let find = await Wishlist.findOne({ where: { ProductId } })
            
            if (find) {
                let begone = await Wishlist.destroy({
                where: { id: find.id }
                });
                
                res.status(200).json({ begone });
            } else {
                let wish = await Wishlist.create(obj);
                if (!wish) {
                    throw {
                        status: 400,
                        message: `Bad Request`,
                    };
                }
    
                res.status(201).json({ wish });
            }
        } catch (err) {
            next(err);
        }
    };

    static getOne = async (req, res, next) => {
        try {
            let target = +req.params.id;
            let wish = await Wishlist.findByPk(target);

            if (!wish) {
                throw {
                    status: 404,
                    message: `cannot find the id / wish`,
                };
            }
            res.status(200).json({ wish });
        } catch (err) {
            next(err);
        }
    };

    static delete = async (req, res, next) => {
        try {
            let target = +req.params.id;

            let wish = await Wishlist.findByPk(target);

            if (!wish) {
                throw {
                    status: 404,
                    message: `data not found`,
                };
            }

            let begone = await Wishlist.destroy({
                where: {
                    id: target,
                },
            });
            res.status(200).json({ message: `Wishlist with id ${target} has been deleted` });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = WishlistController;
