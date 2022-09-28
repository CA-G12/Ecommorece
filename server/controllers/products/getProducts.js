const { getProductsQuery } = require('../../database/queries')

const getProducts = (req, res) => {
  const offset = 1
  getProductsQuery(offset)
    .then((data) => {
      if (data.rowCount) {
        res.json(data.rows)
      }
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = getProducts
