const path = require('path');
const fs = require('fs');

function getPosts() {
  const postsPath = path.join(__dirname, '..', 'data', 'posts.json');
  const fileContent = fs.readFileSync(postsPath, 'utf8');
  return JSON.parse(fileContent);
}

module.exports = {
  getPosts,
};
