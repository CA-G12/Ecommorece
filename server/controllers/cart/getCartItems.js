const { getCartItemsByUserIdQuery } = require('../../database/queries')

const getCartItems = (req, res) => {
  // const {id} = req.params;
  getCartItemsByUserIdQuery(1)
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err))
}

module.exports = { getCartItems }
