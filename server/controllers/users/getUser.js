const bcrypt = require('bcrypt')
const { getUserQuery } = require('../../database/queries/users')
const { CustomError } = require('../../errors/customError')

const getUser = (req, res) => {
  const { email, password } = req.body
  getUserQuery(email)
    .then((result) => {
      if (result.rowCount === 0) {
        throw new CustomError('Password or username are not correct ', 400)
      }
      const hashed = result.rows[0].password
      return bcrypt.compare(password, hashed)
    })
    .then((data) => {
      if (!data)
        throw new CustomError('Password or username are not correct ', 400)
      res.json({ message: 'Logged in' })
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({
          message: err.message,
        })
      }
      res
        .status(err.status || 500)
        .json({ message: err.message || 'Internal Server Error' })
    })
}

module.exports = getUser
