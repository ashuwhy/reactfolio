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
const Page = require('./models/Page'); // Adjust the path as necessary

const insertInitialData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    const initialDataContent = {
      title: 'Initial Data',
      content: `
        <h1>initial data</h1>
        <p>this is the initial data</p>
      `
    };

    const newPage = new Page(initialDataContent);
    await newPage.save();
    console.log('initial data inserted successfully');
  } catch (error) {
    console.error('error inserting initial data:', error);
  } finally {
    mongoose.connection.close();
  }
};

insertInitialData(); 