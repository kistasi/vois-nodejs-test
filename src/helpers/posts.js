const { getJsonFileContent } = require('.');

function getPosts() {
  return getJsonFileContent('posts.json');
}

module.exports = {
  getPosts,
};
