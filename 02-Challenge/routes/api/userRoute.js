
const {createUser, getAllUsers, getOneUser} = require('../../controllers/user-controllers')
const router = require('express').Router()
// route for get without key and with id 
router.route('/').get(getAllUsers).post(createUser)
router.route('/:userId').get(getOneUser)





module.exports = router