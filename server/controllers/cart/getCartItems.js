const { getCartItemsByUserIdQuery } = require('../../database/queries')

const getCartItems = (req, res) => {
  getCartItemsByUserIdQuery(1)
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err))
}

module.exports = { getCartItems }
