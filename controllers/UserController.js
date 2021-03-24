const { User } = require('../models/index.js');

const { comparePassword } = require('../helpers/bcrypt.js');

const { generateToken } = require('../helpers/jwt.js');

const { OAuth2Client } = require('google-auth-library');

class UserController {
    static register = async (req, res, next) => {
        try {
            const { email, name, password } = req.body
            let user = await User.create({ email, name, password });
            if (!user) {
                throw {
                    status: 400,
                    message: `Bad Request`,
                };
            }
            res.status(201).json({ id: user.id, email: user.email });
        } catch (err) {
            next(err);
        }
    };

    static login = async (req, res, next) => {
        try {
            let theEmail = req.body.email;
            let password = req.body.password;

            let theUser = await User.findOne({
                where: {
                    email: theEmail,
                },
            });
            let data = {
                id: theUser.id,
                name: theUser.name,
                email: theUser.email,
                role: theUser.role,
            };

            if (theUser && comparePassword(password, theUser.password) === true) {
                let access_token = generateToken(data);

                res.status(200).json({ access_token });
            } else {
                throw {
                    status: 400,
                    message: 'email / password is wrong',
                };
            }
        } catch (err) {
            next(err);
        }
    };

    static profile = async (req, res, next) => {
        try {
            let theUser = await User.findOne({
                where: {
                    id: req.currentUser.id,
                },
            });
            if (theUser) {
                res.status(200).json({ theUser });
            } else {
                throw {
                    status: 404,
                    message: 'User not found',
                };
            }
        } catch (err) {
            next(err);
        }
    };

    static delete = async (req, res, next) => {
        try {
            let theUser = await User.destroy({
                where: {
                    id: req.currentUser.id,
                },
            });
            if (theUser) {
                res.status(200).json({ message: `The user has been deleted` });
            } else {
                throw {
                    status: 404,
                    message: 'User not found',
                };
            }
        } catch (err) {
            next(err);
        }
    };

    static loginGoogle = (req, res, next) => {
        console.log('masuk google yey')
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        async function verify() {
            const ticket = await client.verifyIdToken({
                idToken: req.body.google_token,
                audience: process.env.GOOGLE_CLIENT_ID,
            });

            const googleUserParams = ticket.getPayload();

            User.findOrCreate({
                where: {
                    email: googleUserParams.email,
                },
                defaults: {
                    name: `Google User`,
                    email: googleUserParams.email,
                    password: new Date().toDateString() + googleUserParams.email,
                },
            })
                .then((user) => {
                    let payload = { id: user[0].id, email: user[0].email, role: user[0] };
                    res.status(200).json({
                        id: payload.id,
                        email: payload.email,
                        access_token: generateToken({ id: payload.id, email: payload.email, role: payload.role }),
                    });
                })
                .catch((err) => {
                    next(err);
                });
        }
        verify();
    };
}

module.exports = UserController;
