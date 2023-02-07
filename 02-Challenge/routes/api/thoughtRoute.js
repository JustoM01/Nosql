const {createThought, getAllThoughts, getOneThought} = require('../../controllers/thought-controller')
const router = require('express').Router()
router.route('/').get(getAllThoughts).post(createThought).get(getOneThought)


// post to add new user//



module.exports = router