const router = require('express').Router();
const { getCartItems, deleteCartItem, addCartItem } = require('../controllers');

router.get('/getCartItems', getCartItems);
router.get('/deleteCartItem/:id', deleteCartItem);
router.post('/addCartItem', addCartItem)
module.exports = router
