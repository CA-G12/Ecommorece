const router = require('express').Router()
const {
  getCartItems,
  deleteCartItem,
  addCartItem,
  updateQuantity,
  deleteAllItems
} = require('../controllers')

router.get('/getCartItems', getCartItems)
router.get('/deleteCartItem/:id', deleteCartItem)
router.post('/addCartItem', addCartItem)
router.post('/updateCartItemQuantity', updateQuantity)
router.get('/deleteAllItems', deleteAllItems)
module.exports = router
