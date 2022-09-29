const { setUser, getUser } = require('./users')
const { getProducts,getProductsByName , getProductById} = require('./products')
const {
  getCartItems,
  deleteCartItem,
  addCartItem,
  updateQuantity,
  deleteAllItems
} = require('./cart')

module.exports = {
  setUser,
  getProducts,
  getCartItems,
  deleteCartItem,
  addCartItem,
  getUser,
  updateQuantity,
  getProductsByName,
  getProductById,
  deleteAllItems
}
