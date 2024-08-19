const {Schema, model} = require ('mongoose')

const thoughtSchema = new Schema ({
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
const reactionSchema = new Schema({
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  });
  
const Thought = model('Thought', thoughtSchema)

module.exports = Thought;