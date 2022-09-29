const router = require('express').Router()

const userRouter = require('./userRoutes')
const productsRouter = require('./productsRoutes')
const cartItemsRoutes = require('./cartItemsRoutes')

router.use(userRouter)
router.use(productsRouter)
router.use(cartItemsRoutes)


module.exports = router
