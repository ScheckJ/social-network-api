const {Thought} = require('../models');
const { updateUser } = require('./UserControllers');

module.exports = {
    async getThoughts (req, res) {
        try{
            const thoughts = await Thought.find()
            res.json (thoughts)
        } catch (err) {res.status(500).json(err)}
    },

    async getOneThought (req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.thoughtId})
            res.json(thought)
        } catch (err) {res.status(500).json(err)}
    },
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      updateUser();
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json({ message: 'Thought deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

