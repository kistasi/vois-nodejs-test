const { getJsonFileContent } = require('.');

function getComments() {
  return getJsonFileContent('comments.json');
}

module.exports = {
  getComments,
};
