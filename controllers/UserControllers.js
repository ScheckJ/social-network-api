const { User } = require("../models");

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async singleUser(req, res) {
    try {
      const user = await user.findOne({ _id: req.params.userId });

      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const user = await user.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateUser(req,res) {
    try {
        const user = findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            {runValidators: true, new: true});

            if (!user) {
                return res.status(404).json({
                  message: 'No studenrt found with this id',
                });
            }
        res.json(user)
    } catch (err) {
        res.status(500).json(err);
      }
  },
  addFriend(req, res) {
   try { 
    const user =User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
      .populate('friends')
    )
         if (!user)
         res.status(404).json({ message: 'No user found with that ID' })
           res.json(user)
      } catch (err) { res.status(500).json(err)
      }
  },
  removeFriend(req, res) {
   try { 
    const user = User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    ).populate('friends');
 
         if (!user)
           res.status(404).json({ message: 'No user found with that ID' })
          res.json(user)
      } catch(err) {  res.status(500).json(err)}
  }
}
