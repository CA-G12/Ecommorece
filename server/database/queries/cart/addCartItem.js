const connection = require('../../config/connection')

const addCartItemQuery = (productId, userId) =>
  connection.query(
    'insert into cart_item(product_id, user_id) values($1, $2) returning *;',
    [productId, userId]
  )

module.exports = addCartItemQuery
