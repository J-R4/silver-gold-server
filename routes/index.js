const router = require('express').Router();
const UserController = require('../controllers/UserController.js');
const ProductController = require('../controllers/ProductController.js');
const BannerController = require('../controllers/BannerController.js');
const CartController = require('../controllers/CartController.js');
const TransController = require('../controllers/TransController.js');
const WishlistController = require('../controllers/WishlistController.js');


const { authenticate, authorizeP, authorizeB, authorizeC, authorizeT, authorizeW, authorizePCustomer } = require('../middlewares/auth.js');

router.get('/', (req, res) => {
    res.send('welcome to silver&gold app good people !');
});

//User Controller
router.post('/login', UserController.login);
router.post('/oAuth', UserController.loginGoogle);

router.post('/register', UserController.register);

router.use(authenticate);

//The APP
router.get('/profile', UserController.profile);
router.delete('/profile', UserController.delete);

router.get('/products', ProductController.products);
router.post('/products', ProductController.postProduct);

router.get('/banners', BannerController.banners);
router.post('/banners', BannerController.postBanner);

router.get('/carts', CartController.carts);
router.post('/carts', CartController.postCart);

router.get('/trans', TransController.trans);
router.post('/trans', TransController.postTrans);

router.get('/wish', WishlistController.wish);
router.post('/wish', WishlistController.postWish);

router.get('/categories', ProductController.showCategories);
router.get('/sort', ProductController.productsByCategory);

router.patch('/products/:id', authorizePCustomer, ProductController.patch);

//Product Controller
router.get('/products/:id', authorizeP, ProductController.getOne);
router.put('/products/:id', authorizeP, ProductController.put);
router.delete('/products/:id', authorizeP, ProductController.delete);

//Banner Controller
router.get('/banners/:id', authorizeB, BannerController.getOne);
router.put('/banners/:id', authorizeB, BannerController.put);
router.patch('/banners/:id', authorizeB, BannerController.patch);
router.delete('/banners/:id', authorizeB, BannerController.delete);

//Cart Controller
router.get('/carts/:id', authorizeC, CartController.getOne);
router.put('/carts/:id', authorizeC, CartController.put);
router.patch('/carts/:id', authorizeC, CartController.patch);
router.delete('/carts/:id', authorizeC, CartController.delete);

//Transaction Controller
router.get('/trans/:id', authorizeT, TransController.getOne);
router.delete('/trans/:id', authorizeT, TransController.delete);

//Wishlist Controller
router.get('/wish/:id', authorizeW, WishlistController.getOne);
router.delete('/wish/:id', authorizeW, WishlistController.delete);

module.exports = router;
