const {User} = require('../../models')
const router = require('express').Router()
router.get('/users', async(req, res ) =>{
    try{ const users = await User.find();
        res.json(users)

    } catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports = router