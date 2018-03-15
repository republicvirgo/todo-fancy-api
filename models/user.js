const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name:  String,
  email:  String,
  fbId:  String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User',userSchema);
