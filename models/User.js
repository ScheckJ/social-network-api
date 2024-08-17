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
        friends: [
            {type: Schema.Types.ObjectId,
             ref: 'User'
            }],
        thoughts: [
            {type: Schema.Types.ObjectId,
             ref: 'Thoughts'
            }],

            toJSON: {
                virtuals: true,
            }
    },
)

userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
})

const User = model('User', userSchema)

module.exports = User