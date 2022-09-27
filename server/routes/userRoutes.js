const router = require('express').Router();
const { setUser } = require('../controllers');

router.route('/signUp').post(setUser);
module.exports = router;