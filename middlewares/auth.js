const { verifyToken } = require('../helpers/jwt');

const { User, Product, Banner, Cart, Wishlist, Transaction } = require('../models');

const authenticate = async (req, res, next) => {
    try {
        if (req.headers.access_token === undefined) {
            throw {
                status: 401,
                message: `Unauthorized`,
            };
        }
        let token = verifyToken(req.headers.access_token);
        let user = await User.findOne({
            where: { id: token.id, email: token.email},
        });
        if (user) {
            req.currentUser = { id: user.id, email: user.email, role: token.role };
            next();
        } else {
            throw {
                status: 401,
                message: `Unauthorized`,
            };
        }
    } catch (err) {
        next(err);
    }
};

const authorizeP = async (req, res, next) => {
    try {
        if (req.headers.access_token === undefined) {
            throw {
                status: 401,
                message: `Unauthorized`,
            };
        }

        let token = verifyToken(req.headers.access_token);
        if (token.role !== 'admin') {
            throw {
                status: 401,
                message: `Unauthorized`,
            };
        }

        let target = +req.params.id;

        let product = await Product.findByPk(target);

        if (product) {
            next();
        } else {
            throw {
                status: 401,
                message: `unauthorized`,
            };
        }
    } catch (err) {
        next(err);
    }
};

const authorizeB = async (req, res, next) => {
    try {
        if (req.headers.access_token === undefined) {
            throw {
                status: 401,
                message: `Unauthorized`,
            };
        }

        let token = verifyToken(req.headers.access_token);
        if (token.role !== 'admin') {
            throw {
                status: 401,
                message: `Unauthorized`,
            };
        }

        let target = +req.params.id;

        let banner = await Banner.findByPk(target);

        if (banner) {
            next();
        } else {
            throw {
                status: 401,
                message: `unauthorized`,
            };
        }
    } catch (err) {
        next(err);
    }
};

const authorizeC = async (req, res, next) => {
    try {
        if (req.headers.access_token === undefined) {
            throw {
                status: 401,
                message: `Unauthorized`,
            };
        }

        let target = +req.params.id

        let cart = await Cart.findByPk(target);

        if (cart && cart.UserId === req.currentUser.id) {
            next();
        } else {
            throw {
                status: 401,
                message: `unauthorized`,
            };
        }
    } catch (err) {
        next(err);
    }
};

const authorizeW = async (req, res, next) => {
    try {
        if (req.headers.access_token === undefined) {
            throw {
                status: 401,
                message: `Unauthorized`,
            };
        }

        let target = +req.params.id

        let wishlist = await Wishlist.findByPk(target);

        if (wishlist && wishlist.UserId === req.currentUser.id) {
            next();
        } else {
            throw {
                status: 401,
                message: `unauthorized`,
            };
        }
    } catch (err) {
        next(err);
    }
};

const authorizeT = async (req, res, next) => {
    try {
        if (req.headers.access_token === undefined) {
            throw {
                status: 401,
                message: `Unauthorized`,
            };
        }

        let target = +req.params.id

        let transaction = await Transaction.findByPk(target);

        if (transaction && transaction.UserId === req.currentUser.id) {
            next();
        } else {
            throw {
                status: 401,
                message: `unauthorized`,
            };
        }
    } catch (err) {
        next(err);
    }
};

module.exports = {
    authenticate,
    authorizeP,
    authorizeB,
    authorizeC,
    authorizeW,
    authorizeT,
};
