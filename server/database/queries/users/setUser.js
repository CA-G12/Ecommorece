const connection = require('../../config/connection')

const setUserQuery = ({ firstName, lastName, email, hashedPassword, imgUrl }) =>
  connection.query(
    'INSERT INTO users(first_name,last_name  ,email, password,img_url ) VALUES (($1), ($2), ($3),($4),($5)) RETURNING id;',
    [firstName, lastName, email, hashedPassword, imgUrl]
  )

module.exports = setUserQuery
