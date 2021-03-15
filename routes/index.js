const router = require('express').Router();

const UserController = require('../controllers/UserController.js');
const ProductController = require('../controllers/ProductController.js');

router.get('/login', UserController.login);

module.exports = router;
