const connection = require('../../config/connection')

const deleteAllItemsQuery = () =>
  connection.query('delete * cart_item returning *')

module.exports = deleteAllItemsQuery
