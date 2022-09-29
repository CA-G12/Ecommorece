const { totalPriceQuery } = require('../../database/queries')

const getTotalPrice = (req, res) => {
  const { id } = req.token
  totalPriceQuery(id)
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err))
}

module.exports = { getTotalPrice }
