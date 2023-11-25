const { getComments } = require('../../helpers/comments');

function GetCommentsEndpoint(req, res) {
  const postId = Number(req.params.id);
  const comments = getComments();
  const list = comments.filter((item) => item.post_id === postId);

  if (list.length === 0) {
    res
      .status(400)
      .json({
        error: 'Comments not found',
      });
  } else {
    res
      .json({
        data: list,
      });
  }
}

module.exports = GetCommentsEndpoint;
