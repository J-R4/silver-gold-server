const { Banner } = require('../models/index.js');

class BannerController {
    static banners = async (req, res, next) => {
        try {
            let banner = await Banner.findAll();
            if (banner === undefined) {
                throw {
                    status: 404,
                    message: `Not Found`,
                };
            }
            res.status(200).json({ banner });
        } catch (err) {
            next(err);
        }
    };

    static postBanner = async (req, res, next) => {
        try {
            let data = req.body;
            let obj = {
                title: data.title,
                image_url: data.image_url,
                status: data.status
            };
            let theData = await Banner.create(obj);

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
            let theBanner = await Banner.findByPk(target);

            if (!theBanner) {
                throw {
                    status: 404,
                    message: `cannot find the id / Banner`,
                };
            }
            res.status(200).json({ theBanner });
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
                image_url: data.image_url,
                status: data.status
            };

            let banner = await Banner.findByPk(target);

            if (!banner) {
                throw {
                    status: 404,
                    message: `data not found`,
                };
            }

            let update = await Banner.update(obj, {
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
            let banner = await Banner.findByPk(target);

            if (!banner) {
                throw {
                    status: 404,
                    message: `data not found`,
                };
            }

            let update = await Banner.update(data, {
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

            let banner = await Banner.findByPk(target);

            if (!banner) {
                throw {
                    status: 404,
                    message: `data not found`,
                };
            }

            let begone = await Banner.destroy({
                where: {
                    id: target,
                },
            });
            res.status(200).json({ message: `Banner with id ${target} has been deleted` });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = BannerController;
