const fs = require('fs');

// Read the exported JSON file
const data = require('./initial.json');

// Transform the data by removing MongoDB specific fields
const transformedData = data.map(page => ({
  title: page.title,
  content: page.content
}));

// Write the transformed data
fs.writeFileSync(
  './src/backend/initial.json',
  JSON.stringify(transformedData, null, 2)
); 