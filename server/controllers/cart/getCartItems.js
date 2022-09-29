const { getCartItemsByUserIdQuery } = require('../../database/queries')

const getCartItems = (req, res) => {
  const { id } = req.token
  getCartItemsByUserIdQuery(id)
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err))
}

module.exports = { getCartItems }
