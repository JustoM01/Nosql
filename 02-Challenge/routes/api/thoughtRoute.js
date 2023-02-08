// imports all methods from controllers
const {createThought, getAllThoughts, getOneThought} = require('../../controllers/thought-controller')
const router = require('express').Router()
// making route for all methods from controller
router.route('/').get(getAllThoughts).post(createThought)
router.route('/:userId').get(getOneThought)






module.exports = router