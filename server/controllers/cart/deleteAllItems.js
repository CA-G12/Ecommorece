const { deleteAllItemsQuery } = require('../../database/queries')

const deleteAllItems = (req, res) => {
  deleteAllItemsQuery()
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err))
}

module.exports = { deleteAllItems }
