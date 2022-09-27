const router = require('express').Router();

const userRouter = require('./userRoutes');
const productsRouter = require('./productsRoutes');

router.use(userRouter)
router.use(productsRouter)

module.exports = router