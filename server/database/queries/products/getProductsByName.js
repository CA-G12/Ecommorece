const connection = require('../../config/connection')

const getProductsByNameQuery = (name, offset) =>
  connection.query(
    'Select * from products where name like $1 limit 15 offset $2;',
    [`${name}%`, offset]
  )

module.exports = getProductsByNameQuery
