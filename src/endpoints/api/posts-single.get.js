const { getPosts } = require('../../helpers/posts');

function GetPostsSingleEndpoint(req, res) {
  const posts = getPosts();
  const post = posts.find((item) => item.id === Number(req.params.id));

  if (!post) {
    res.status(400);
  } else {
    res.json({ data: post });
  }
}

module.exports = GetPostsSingleEndpoint;
