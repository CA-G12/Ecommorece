const connection = require('../../config/connection');

const deleteCartItemQuery = (id) => connection.query('delete from cart_item where id = $1 returning *', [id]);

module.exports = deleteCartItemQuery;
