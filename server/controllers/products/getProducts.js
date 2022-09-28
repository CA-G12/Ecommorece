const { getProductsQuery } = require('../../database/queries')

const getProducts = (req, res) => {
  const offset = 1
  getProductsQuery(offset)
    .then((data) => {
      if (data.rowCount) {
        res.json(data.rows)
      }else{
        res.json({msg:'No data Found!'})
      }
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = getProducts
