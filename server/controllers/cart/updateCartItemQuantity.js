const { updateQuantityQuery } = require('../../database/queries')

const updateQuantity = (req, res) => {
  const { cartItemId, quantityValue } = req.body
  updateQuantityQuery(cartItemId, quantityValue)
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
}

module.exports = { updateQuantity }
