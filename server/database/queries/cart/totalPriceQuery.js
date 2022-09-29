const connection = require('../../config/connection')

const totalQuery = (id) =>
  connection.query(
    'select sum(p.price) from products as p join cart_item as c on c.product_id = p.id where c.user_id=$1',
    [id]
  )

module.exports = totalQuery
