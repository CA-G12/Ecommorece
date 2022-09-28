const connection = require('../../config/connection')

const addCartItemQuery = (productId, userId, quantity) =>
  connection.query(
    'insert into cart_item(product_id, user_id, quantity) values($1, $2, $3) returning *;',
    [productId, userId, quantity]
  )

module.exports = addCartItemQuery
