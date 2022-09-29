const connection = require('../../config/connection')

const deleteAllItemsQuery = () =>
  connection.query('delete from cart_item')

module.exports = deleteAllItemsQuery
