const path = require('path');
const fs = require('fs');

function getComments() {
  const filePath = path.join(__dirname, '..', '..', 'data', 'comments.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

module.exports = {
  getComments,
};
