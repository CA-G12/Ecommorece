const bcrypt = require('bcrypt')
const { setUserQuery } = require('../../database/queries')
const createToken = require('../module/generateToken')
let userId = 0
const setUser = (req, res, next) => {
  const { firstName, lastName, email, password, imgUrl } = req.body
  bcrypt.hash(password, 10).then((hashedPassword) => {
    setUserQuery({
      firstName,
      lastName,
      email,
      hashedPassword,
      imgUrl,
    })
      .then((data) => {
        if (data.rowCount) {
          userId = data.rows[0].id
          return createToken(data.rows[0].id)
        }
      })
      .then((token) => {
        res
          .cookie('token', token, { httpOnly: true, secure: true })
          .json({ msg: `logged in with id : ${userId}` })
      })
      .catch((err) => {
        next(err)
      })
  })
}

module.exports = setUser
