const { deleteCartItemQuery } = require('../../database/queries')

const deleteCartItem = (req, res) => {
  const { id } = req.params
  deleteCartItemQuery(id)
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err))
}

module.exports = { deleteCartItem }
