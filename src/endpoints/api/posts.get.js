const { getPosts } = require('../../helpers/posts');

function PostsEndpoint(req, res) {
  res.json({ data: getPosts() });
}

module.exports = PostsEndpoint;
