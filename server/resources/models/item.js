const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  itemId: String,
  group: String,
  title: String,
  start: Number,
  end: Number,
  tip: String,
  email: String,
});

module.exports = mongoose.model('Item', itemSchema);