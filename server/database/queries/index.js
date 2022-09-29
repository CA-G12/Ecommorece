const { setUserQuery, getUserQuery } = require('./users')
const { getProductsQuery, getProductsByNameQuery, getProductByIdQuery } = require('./products')
const {
  getCartItemsByUserIdQuery,
  deleteCartItemQuery,
  addCartItemQuery,
  updateQuantityQuery,
  deleteAllItemsQuery,
  totalPriceQuery
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
  getProductByIdQuery,
  deleteAllItemsQuery,
  totalPriceQuery
}
