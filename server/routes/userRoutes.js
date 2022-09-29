const router = require('express').Router()
const { setUser, getUser } = require('../controllers');
const checkUserAuth = require('../controllers/module/checkUserAuth')
const verifyToken = require('../controllers/module/verifyTokenjs');

router.get('/checkUserAuth', verifyToken, checkUserAuth);

router.route('/signUp').post(setUser)
router.route('/login').post(getUser)
module.exports = router
