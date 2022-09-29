const { addCartItemQuery } = require('../../database/queries')

const addCartItem = (req, res) => {
  const { productId, quantity } = req.body
  const { id } = req.token
  addCartItemQuery(productId, id, quantity)
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err))
}

module.exports = { addCartItem }
