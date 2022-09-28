const router = require('express').Router()
const { getProducts } = require('../controllers')

router.route('/products').get(getProducts)
module.exports = router
