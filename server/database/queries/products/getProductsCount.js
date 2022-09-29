const connection = require('../../config/connection')

const getProductsCountQuery = (minPrice,maxPrice,name='',category='') =>
connection.query(`Select count(*) from products where price between $1 AND $2 AND category like $3 AND name like $4;`, [minPrice,maxPrice,`${category}%`,`${name}%`])

module.exports = getProductsCountQuery;
