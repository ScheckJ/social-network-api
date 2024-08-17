const {Schema,model} = require ('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
        }
    },
    {
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/, 'Please enter a valid email address.']
        },
        friends: [friendsSchema],
        thoughts: [thoughtsSchema]

        
    },
)
const User = model('user', userSchema)

module.exports = User