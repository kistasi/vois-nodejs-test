const { getPosts } = require('../../helpers/posts');

function GetPostsEndpoint(req, res) {
  res.json({ data: getPosts() });
}

module.exports = GetPostsEndpoint;
