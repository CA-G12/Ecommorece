const router = require('express').Router()
const { getProducts,getProductsByName } = require('../controllers')

router.route('/products').get(getProducts);
router.route('/products/:name').get(getProductsByName);
module.exports = router
