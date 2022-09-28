const { setUserQuery, getUserQuery } = require('./users')
const { getProductsQuery,getProductsByNameQuery } = require('./products')
const {
  getCartItemsByUserIdQuery,
  deleteCartItemQuery,
  addCartItemQuery,
  updateQuantityQuery,
} = require('./cart')

module.exports = {
  setUserQuery,
  getProductsQuery,
  getCartItemsByUserIdQuery,
  deleteCartItemQuery,
  addCartItemQuery,
  getUserQuery,
  updateQuantityQuery,
  getProductsByNameQuery,
}
