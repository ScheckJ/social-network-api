const {Schema, model} = require ('mongoose')

const thoughtsSchema = new Schema ({
    username: {
        type: String,
        requires: true,
    }, 
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date, 
        default: Date.now()
    }, 
    reactions: [reactionSchema],
},
{
    toJSON:{
        virtuals: true,
    },
    id: false
},
)

const Thought = model('thought', thoughtsSchema)

module.exports = Thought;