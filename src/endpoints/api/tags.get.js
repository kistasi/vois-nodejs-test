const { getPosts } = require('../../helpers/posts');

function GetTagsEndpoint(req, res) {
  const tagName = req.params.name;
  const posts = getPosts();
  const list = posts.filter((item) => item.tags.includes(tagName));

  if (list.length === 0) {
    res
      .status(400)
      .json({
        error: 'Posts not found',
      });
  } else {
    res.json({
      data: list,
    });
  }
}

module.exports = GetTagsEndpoint;
