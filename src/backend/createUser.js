/**
 * Apple Notes Portfolio
 * Original Author: Ashutosh Sharma (@ashuwhy)
 * GitHub: https://github.com/ashuwhy/reactfolio
 *
 * While this template is available for use, proper attribution
 * to the original author is required.
 */

require('dotenv').config(); 
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // Adjust the path as necessary

const createUser = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    const username = process.env.REACT_APP_USERNAME;
    const password = process.env.REACT_APP_PASSWORD;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed Password:', hashedPassword);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    console.log('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    mongoose.connection.close();
  }
};

createUser();