/**
 * Apple Notes Portfolio
 * Original Author: Ashutosh Sharma (@ashuwhy)
 * GitHub: https://github.com/ashuwhy/reactfolio
 *
 * While this template is available for use, proper attribution
 * to the original author is required.
 */

const fs = require('fs');
const { exec } = require('child_process');
require('dotenv').config();

// Minify HTML content while maintaining readability
const minifyHTML = (html) => {
  return html
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .trim();
};

// Execute mongoexport command
const mongoexport = () => {
  const command = `mongoexport --collection=pages --db=test --out=./src/backend/initial.json --jsonArray --uri="${process.env.MONGODB_URI}"`;
  console.log("running command:", command);
  console.log("fetching latest data from mongodb...");
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`error executing mongoexport: ${error}`);
      return;
    }
    
    // After successful export, process the file
    try {
      // Read the exported JSON file
      const data = require('./initial.json');

      console.log("processing initial data...");
      // Transform the data by removing MongoDB specific fields
      const transformedData = data.map(page => ({
        title: page.title,
        content: minifyHTML(page.content)
      }));

      // Write the transformed data
      fs.writeFileSync(
        './src/backend/initial.json',
        JSON.stringify(transformedData)  // Remove pretty printing
      );
      
      console.log('initial data processed and saved successfully');
    } catch (err) {
      console.error('error processing initial data:', err);
    }
  });
};

// Run the export and transform
mongoexport(); 