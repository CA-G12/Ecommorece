const { setUser, getUser } = require('./users')
const { getProducts,getProductsByName } = require('./products')
const {
  getCartItems,
  deleteCartItem,
  addCartItem,
  updateQuantity,
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
}
