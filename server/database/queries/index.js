const { setUserQuery, getUserQuery } = require('./users')
const { getProductsQuery,getProductsCountQuery, getProductByIdQuery} = require('./products')
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
  getProductsCountQuery,
  getProductByIdQuery
}
