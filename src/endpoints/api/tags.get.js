const { getPosts } = require('../../helpers/posts');

function GetTagsEndpoint(req, res) {
  const tagName = req.params.name;
  const posts = getPosts();
  const result = posts.filter((item) => item.tags.includes(tagName));
  res.json({ data: result });
}

module.exports = GetTagsEndpoint;
