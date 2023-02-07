const {User, Thought} = require('../models')

module.exports = {
    createThought(req, res) {
        Thought.create(req.body)
          .then((thoughtdata) => {
            User.findOneAndUpdate({where:{_id:req.body.userId}},
                {
                    $addToSet:{thoughts:thoughtdata._id}
                },{
                    new:true,
                    runValidators:true
                })
          })
          .catch((err) => res.status(500).json(err));
      },

      getAllThoughts(req, res) {
        Thought.find()
        .then((thoughtdata) => res.json(thoughtdata))
          .catch((err) => res.status(500).json(err));
      },

      getOneThought(req, res) {
        Thought.findOne({
            where:{
                _id:req.params.userId
            }
        })
        .then((thoughtdata) => res.json(thoughtdata))
          .catch((err) => res.status(500).json(err));
      },
      

}