const express = require('express');
const ExampleEndpoint = require('../endpoints/api/example');

const router = express.Router();

router.get('/example', ExampleEndpoint);

module.exports = router;
