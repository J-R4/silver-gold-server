const { Product } = require('../models/index.js');

class ProductController {
    static products = async (req, res, next) => {
        try {
            let product = await Product.findAll();
            if (!product) {
                throw {
                    status: 404,
                    message: `Not Found`,
                };
            }
            res.status(200).json({ product });
        } catch (err) {
            next(err);
        }
    };

    static postProduct = async (req, res, next) => {
        try {
            let data = req.body;
            let obj = {
                title: data.title,
                category: data.category,
                UserId: req.currentUser.id,
            };
            let theData = await Product.create(obj);

            if (!theData) {
                throw {
                    status: 400,
                    message: `Bad Request`,
                };
            }

            res.status(201).json({ theData });
        } catch (err) {
            next(err);
        }
    };

    static getOne = async (req, res, next) => {
        try {
            let target = +req.params.id;
            let theProduct = await Product.findByPk(target);

            if (!theProduct) {
                throw {
                    status: 404,
                    message: `cannot find the id / product`,
                };
            }
            res.status(200).json({ theProduct });
        } catch (err) {
            next(err);
        }
    };

    static put = async (req, res, next) => {
        try {
            let target = +req.params.id;
            let data = req.body;
            let obj = {
                title: data.title,
                category: data.category,
            };

            let product = await Product.findByPk(target);

            if (!product) {
                throw {
                    status: 404,
                    message: `data not found`,
                };
            }

            let update = await Product.update(obj, {
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
            let data = { category: req.body.category };
            let product = await Product.findByPk(target);

            if (!product) {
                throw {
                    status: 404,
                    message: `data not found`,
                };
            }

            let update = await Product.update(data, {
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

            let product = await Product.findByPk(target);

            if (!product) {
                throw {
                    status: 404,
                    message: `data not found`,
                };
            }

            let begone = await Product.destroy({
                where: {
                    id: target,
                },
            });
            res.status(200).json({ message: `Product with id ${target} has been deleted` });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = ProductController;
