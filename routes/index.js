const router = require('express').Router();
const UserController = require('../controllers/UserController.js');
const ProductController = require('../controllers/ProductController.js');
const BannerController = require('../controllers/BannerController.js');

const { authenticate, authorize } = require('../middlewares/auth.js');

router.get('/', (req, res) => {
    res.send('welcome to silver&gold app good people !');
});

//User Controller
router.post('/login', UserController.login);
router.post('/oAuth', UserController.loginGoogle);

router.post('/register', UserController.register);

router.use(authenticate);

//Product & Banner Controller
router.get('/products', ProductController.products);
router.get('/banners', BannerController.banners);

router.get('/sort', ProductController.productsByCategory);

router.use(authorize);

router.post('/products', ProductController.postProduct);
router.post('/banners', BannerController.postBanner);

router.get('/products/:id', ProductController.getOne);
router.put('/products/:id', ProductController.put);
router.patch('/products/:id', ProductController.patch);
router.delete('/products/:id', ProductController.delete);

router.get('/banners/:id', BannerController.getOne);
router.put('/banners/:id', BannerController.put);
router.patch('/banners/:id', BannerController.patch);
router.delete('/banners/:id', BannerController.delete);

module.exports = router;
