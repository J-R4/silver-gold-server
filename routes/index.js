const router = require('express').Router();
const UserController = require('../controllers/UserController.js');
const ProductController = require('../controllers/ProductController.js');

const { authenticate, authorize } = require('../middlewares/auth.js');

router.get('/', (req, res) => {
    res.send('welcome to silver&gold good people !');
});

//User Controller
router.post('/login', UserController.login);
router.post('/oAuth', UserController.loginGoogle);

router.post('/register', UserController.register);

router.use(authenticate);

//ProductController
router.get('/products', ProductController.products);
router.post('/products', ProductController.postProduct);

router.use(authorize);

router.get('/products/:id', ProductController.getOne);
router.put('/products/:id', ProductController.put);
router.patch('/products/:id', ProductController.patch);
router.delete('/products/:id', ProductController.delete);

module.exports = router;
