const { getProductsByNameQuery } = require('../../database/queries')

const getProductsByName = (req, res) => {
  const offset = 0;
  getProductsByNameQuery(req.params.name,offset)
    .then((data) => {
      if (data.rowCount) {
        res.json(data.rows)
      }else{
        res.json({msg:"No match found!"})
      }
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = getProductsByName;
