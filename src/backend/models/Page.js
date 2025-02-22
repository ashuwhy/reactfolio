/**
 * Apple Notes Portfolio
 * Original Author: Ashutosh Sharma (@ashuwhy)
 * GitHub: https://github.com/ashuwhy/reactfolio
 *
 * While this template is available for use, proper attribution
 * to the original author is required.
 */

const mongoose = require('mongoose');

const PageSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model('Page', PageSchema); 