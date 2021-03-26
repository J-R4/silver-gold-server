const { Product, Category } = require('../models/index.js');
const { Op } = require("sequelize");

class ProductController {
    static products = async (req, res, next) => {
        try {
            let product = await Product.findAll({
                where: {
                    stock: {
                        [Op.gte]: 1, 
                    }
                }
            });
            if (product === undefined) {
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
                name: data.name,
                image_url: data.image_url,
                price: data.price,
                stock: data.stock,
                category: data.category
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
                name: data.name,
                image_url: data.image_url,
                price: data.price,
                stock: data.stock,
                category: data.category
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
            let data = { price: req.body.price, stock: req.body.stock };
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

    static showCategories = async (req, res, next) => {
        try {
            let categories = await Category.findAll();
            if (categories === undefined) {
                throw {
                    status: 404,
                    message: `Not Found`,
                };
            }
            res.status(200).json({ categories });
        } catch (err) {
            next(err);
        }
    };

    static productsByCategory = async (req, res, next) => {
        try {
            const { catId } = req.body
            let sort = await Product.findAll({
                where: {
                    CategoryId: catId
                }
            });
            if (sort === undefined) {
                throw {
                    status: 404,
                    message: `Not Found`,
                };
            }
            res.status(200).json({ sort });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = ProductController;
