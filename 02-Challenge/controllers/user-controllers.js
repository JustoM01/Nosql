const {User, Thought} = require('../models')

module.exports = {
    createUser(req, res) {
        User.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },

      getAllUsers(req, res) {
        User.find()
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },

      getOneUser(req, res) {
        User.findOne({
            
                _id:req.params.userId
            
        })
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },


}
