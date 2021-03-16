const errHandler = async (err, req, res, next) => {
    try {
        if (err) {
            if (err.name === `SequelizeValidationError`) {
                let msg = [];
                err.errors.forEach((mes, i) => {
                    msg.push(mes.validatorArgs[0].message);
                });
                res.status(400).json({
                    message: `Validation Error`,
                    detail: msg,
                });
            } else if (err.message.name === `JsonWebTokenError`) {
                res.status(401).json({ message: `You are not Authorized` });
            } else if (err.status) {
                res.status(err.status).json({ message: err.message });
            }
        } else {
            res.status(500).json({ message: `internal server error` });
        }
    } catch (err) {
        res.status(500).json({ message: `internal server error` });
    }
};

module.exports = errHandler;
