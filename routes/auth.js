const express = require('express');

const ctrlUsers = require('../controllers/users/ctrlUsers');

const router = express.Router();

router.get('/', ctrlUsers.getUsers);

module.exports = router;
