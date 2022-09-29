const router = require('express').Router()
const verifyToken = require('../controllers/module/verifyTokenjs')

const {
  getCartItems,
  deleteCartItem,
  addCartItem,
  updateQuantity,
  deleteAllItems,
  getTotalPrice,
} = require('../controllers')

router.get('/getCartItems', verifyToken, getCartItems)
router.get('/deleteCartItem/:id', verifyToken, deleteCartItem)
router.post('/addCartItem', verifyToken, addCartItem)
router.post('/updateCartItemQuantity', verifyToken, updateQuantity)
router.get('/deleteAllItems', deleteAllItems)
router.get('/getTotalPrice', verifyToken, getTotalPrice)
module.exports = router
