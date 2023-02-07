const { Schema, model } = require('mongoose')
const reactionSchema = require('./Reaction')
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            trim: true
        },

        username: {
            type: String,
            required: true,

        },
        createdAt: {
            type: Date,
            default: Date.now
        },

        reactions: [reactionSchema]

    },

    {
        toJSON: {
            virtuals: true
        },


        id: false

    }

)
const Thought= model("Thought", ThoughtSchema)
module.exports = Thought