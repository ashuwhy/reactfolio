/**
 * Apple Notes Portfolio
 * Original Author: Ashutosh Sharma (@ashuwhy)
 * GitHub: https://github.com/ashuwhy/reactfolio
 *
 * While this template is available for use, proper attribution
 * to the original author is required.
 */

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  // console.log('Username:', username);
  // console.log('Password:', password);
  const user = await User.findOne({ username });
  // console.log('User found:', user);
  if (!user) {
    return res.status(401).send('no user found');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  // console.log('Password match:', isMatch);
  if (!isMatch) {
    return res.status(401).send('incorrect password');
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});

module.exports = router;