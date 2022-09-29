require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken = (id) => new Promise((res, rej) => {
  jwt.sign({ id }, process.env.secret, (err, token) => {
    if (err) {
      rej(err);
    } else {
      res(token);
    }
  });
});
module.exports = generateToken;