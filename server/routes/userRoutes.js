const router = require('express').Router()
const { setUser, getUser } = require('../controllers')

router.route('/signUp').post(setUser)
router.route('/login').post(getUser)
module.exports = router
