const { getComments } = require('../../helpers/comments');

function GetCommentsEndpoint(req, res) {
  const postId = Number(req.params.id);
  const comments = getComments();
  const postComments = comments.filter((item) => item.post_id === postId);

  res.json({ data: postComments });
}

module.exports = GetCommentsEndpoint;
