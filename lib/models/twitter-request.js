const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  twitId: {
    type: String,
    required: true
  },
  location: {
    type: String,
  },
  followers: {
    type: String
  },
  hashtags: [{
    type: Object
  }],
  time: {
    type: String,
    required: true
  },
  tweet: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('TwitterReq', schema);