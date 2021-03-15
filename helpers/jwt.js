const jwt = require('jsonwebtoken');

const generateToken = (data) => jwt.sign({ id: data.id, email: data.email, role: data.role }, process.env.JWT_SECRET);

const verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = {
    generateToken,
    verifyToken,
};
