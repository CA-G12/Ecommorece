const { addCartItemQuery } = require('../../database/queries')

const addCartItem = (req, res) => {
  const { productId, userId, quantity } = req.body
  addCartItemQuery(productId, userId, quantity)
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err))
}

module.exports = { addCartItem }
