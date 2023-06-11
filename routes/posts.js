const express = require('express');

const ctrlPosts = require('../controllers/posts/ctrlPosts');

const router = express.Router();

router.get('/', ctrlPosts.getPosts);

module.exports = router;
