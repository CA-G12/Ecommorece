const router = require('express').Router()
const {
  getCartItems,
  deleteCartItem,
  addCartItem,
  updateQuantity,
} = require('../controllers')

router.get('/getCartItems', getCartItems)
router.get('/deleteCartItem/:id', deleteCartItem)
router.post('/addCartItem', addCartItem)
router.post('/updateCartItemQuantity', updateQuantity)

module.exports = router
