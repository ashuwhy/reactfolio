const mongoose = require('mongoose');

const PageSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model('Page', PageSchema); 