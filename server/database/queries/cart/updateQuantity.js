const connection = require('../../config/connection')

const updateQuantityQuery = (cartItemId, quantityValue) =>
  connection.query(
    'update cart_item set quantity = quantity +($2) where id =$1 returning *;',
    [cartItemId, quantityValue]
  )

module.exports = updateQuantityQuery
