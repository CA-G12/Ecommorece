const { totalPriceQuery } = require('../../database/queries')

const getTotalPrice = (req, res) => {
    // const {id} = req.params;
    totalPriceQuery(1)
        .then((data) => res.json(data.rows))
        .catch((err) => console.log(err))
}

module.exports = { getTotalPrice }
