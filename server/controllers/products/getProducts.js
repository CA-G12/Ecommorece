const { getProductsQuery ,getProductsCountQuery} = require('../../database/queries')

const getProducts = (req, res) => {
  const {minPrice,maxPrice,name,category,offset} = req.query;
  getProductsQuery(minPrice,maxPrice,offset,name,category==='all'?'':category)
    .then((data) => {
      if (data.rowCount) {
        getProductsCountQuery(minPrice,maxPrice,name,category==='all'?'':category)
        .then((count)=>{
          res.json({
            data:data.rows,
            count:count.rows[0].count
          })
        }).catch();
      }else{
        res.json({msg:'No data Found!'})
      }
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = getProducts
