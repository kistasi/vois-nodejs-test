const { getPosts } = require('../../helpers/posts');

function PostSingleEndpoint(req, res) {
  const posts = getPosts();
  const post = posts.find((item) => item.id === Number(req.params.id));

  if (!post) {
    res
      .status(400)
      .json({
        error: 'Post not found',
      });
  } else {
    res.json({
      data: post,
    });
  }
}

module.exports = PostSingleEndpoint;
