const express = require('express');
const PostsEndpoint = require('../endpoints/api/posts.get');
const PostSingleEndpoint = require('../endpoints/api/posts-single.get');
const CommentsEndpoint = require('../endpoints/api/comments.get');
const TagsEndopoint = require('../endpoints/api/tags.get');

const router = express.Router();

router.get('/posts', PostsEndpoint);
router.get('/posts/:id', PostSingleEndpoint);
router.get('/posts/:id/comments', CommentsEndpoint);
router.get('/tags/:name', TagsEndopoint);

module.exports = router;
