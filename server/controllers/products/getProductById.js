const { getProductByIdQuery } = require('../../database/queries')

const getProductById = (req, res) => {
  const { id } = req.params
  getProductByIdQuery(id)
    .then((data) => {
      if (data.rowCount) {
        res.json(data.rows[0])
      } else {
        res.json({ msg: 'No data Found!' })
      }
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = getProductById
