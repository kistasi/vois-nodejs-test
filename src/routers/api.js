const express = require('express');
const PostsGetEndpoint = require('../endpoints/api/posts.get');
const GetPostsSingleEndpoint = require('../endpoints/api/posts-single.get');
const GetCommentsEndpoint = require('../endpoints/api/comments.get');
const GetTagsEndpoint = require('../endpoints/api/tags.get');

const router = express.Router();

router.get('/posts', PostsGetEndpoint);
router.get('/posts/:id', GetPostsSingleEndpoint);
router.get('/posts/:id/comments', GetCommentsEndpoint);
router.get('/tags/:name', GetTagsEndpoint);

module.exports = router;
