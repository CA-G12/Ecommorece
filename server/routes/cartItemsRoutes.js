const router = require('express').Router();
const { getCartItems } = require('../controllers');

router.get('/getCartItems', getCartItems);

module.exports = router
