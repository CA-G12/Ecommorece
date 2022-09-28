const connection = require('../../config/connection')

const getUserQuery = (email) =>
  connection.query(
    `
select email, password from users where email = $1 ;
`, [email]
)
module.exports = getUserQuery
