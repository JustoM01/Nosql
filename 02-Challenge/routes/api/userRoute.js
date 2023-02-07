
const {createUser, getAllUsers, getOneUser} = require('../../controllers/user-controllers')
const router = require('express').Router()
router.route('/').get(getAllUsers).post(createUser)
router.route('/:userId').get(getOneUser)

// post to add new user//



module.exports = router