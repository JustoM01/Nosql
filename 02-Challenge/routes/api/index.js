const router = require('express').Router()
const userRoutes = require('./userRoute.js')
const thoughtRoutes = require('./thoughtRoute')
// making route for route files
router.use('/thoughts', thoughtRoutes)
router.use('/users', userRoutes)
module.exports = router