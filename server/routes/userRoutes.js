const router = require('express').Router();

// const router = express();
const { setUser } = require('../controllers');
// const {
//   signUpValidation, setToken, handleErrors, 
// } = require('../middlewares');

router.route('/signUp').post(setUser);
module.exports = router;