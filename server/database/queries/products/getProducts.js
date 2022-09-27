const connection = require('../../config/connection');

const getProductsQuery = (offset) => connection.query('Select * from products limit 15 offset $1;',[offset]);

module.exports = getProductsQuery;
