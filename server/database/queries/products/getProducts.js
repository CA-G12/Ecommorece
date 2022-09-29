const connection = require('../../config/connection')

const getProductsQuery = (
  minPrice,
  maxPrice,
  offset,
  name = '',
  category = ''
) =>
  connection.query(
    `Select * from products where price between $1 AND $2 AND category like $3 AND name like $4 limit 15 offset $5;`,
    [minPrice, maxPrice, `${category}%`, `${name}%`, offset]
  )

module.exports = getProductsQuery
