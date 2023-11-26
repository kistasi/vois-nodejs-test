const path = require('path');
const fs = require('fs');

function getJsonFileContent(fileName) {
  const filePath = path.join(__dirname, '..', '..', 'data', fileName);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

module.exports = {
  getJsonFileContent,
};
