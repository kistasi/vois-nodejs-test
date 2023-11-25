const path = require('path');
const fs = require('fs');

function getPosts() {
  const filePath = path.join(__dirname, '..', '..', 'data', 'posts.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

module.exports = {
  getPosts,
};
