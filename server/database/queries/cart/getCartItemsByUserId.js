const connection = require('../../config/connection');

const getCartItemsByUserIdQuery = (id) => connection.query('Select c.id as cartId ,p.id as productId , p.name , p.description , p.price , p.category , p.img_url , c.quantity from cart_item c join products p on p.id=c.product_id  where c.user_id = $1 ;', [id]);

module.exports = getCartItemsByUserIdQuery;
