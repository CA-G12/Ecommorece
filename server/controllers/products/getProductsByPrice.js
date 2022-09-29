const { getProductsByPriceQuery } = require('../../database/queries')

const getProductsByPrice = (req, res) => {
  const offset = 0;
  getProductsByPriceQuery(req.params.name,offset)
    .then((data) => {
      if (data.rowCount) {
        res.status(200).json(data.rows)
      }else{
        res.status(200).json({msg:"No match found!"})
      }
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = getProductsByPrice;
