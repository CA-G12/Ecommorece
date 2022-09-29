const router = require('express').Router()
const { getProducts,getProductsByName, getProductById } = require('../controllers')

router.route('/products').get(getProducts);
router.route('/products/:name').get(getProductsByName); 
router.route('/product/:id').get(getProductById);

module.exports = router
