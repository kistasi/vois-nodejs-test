const path = require('path');
const fs = require('fs');

function getComments() {
  const postsPath = path.join(__dirname, '..', 'data', 'comments.json');
  const fileContent = fs.readFileSync(postsPath, 'utf8');
  return JSON.parse(fileContent);
}

module.exports = {
  getComments,
};
