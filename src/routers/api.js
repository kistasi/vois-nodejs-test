const express = require('express');
const PostsGetEndpoint = require('../endpoints/api/posts.get');
const GetPostsSingleEndpoint = require('../endpoints/api/posts-single.get');

const router = express.Router();

router.get('/posts', PostsGetEndpoint);
router.get('/posts/:id', GetPostsSingleEndpoint);

module.exports = router;
