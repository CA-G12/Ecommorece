const connection = require('../../config/connection');

const getCartItemsByUserIdQuery = (id) => connection.query('Select p.id , p.name , p.description , p.price , p.category , p.img_url , c.quantity from cart_item c join products p on p.id=c.product_id user_id = $1;', [id]);

module.exports = getCartItemsByUserIdQuery;
