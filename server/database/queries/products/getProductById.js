const connection = require('../../config/connection')

const getProductByIdQuery = (id) =>
  connection.query('Select * from products where id = $1;', [id])

module.exports = getProductByIdQuery
