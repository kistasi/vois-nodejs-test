const { getPosts } = require('../../helpers/posts');

function GetPostsSingleEndpoint(req, res) {
  const posts = getPosts();
  const post = posts.find((item) => item.id === Number(req.params.id));
  res.json({ data: post });
}

module.exports = GetPostsSingleEndpoint;
