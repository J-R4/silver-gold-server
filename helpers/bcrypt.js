const bcrypt = require('bcryptjs');

function hashPassword(pass) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(pass, salt);
}

function comparePassword(pass, hash) {
    return bcrypt.compareSync(pass, hash);
}

module.exports = {
    hashPassword,
    comparePassword,
};
