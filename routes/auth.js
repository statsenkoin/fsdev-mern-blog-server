const express = require('express');

const ctrlUsers = require('../controllers/users');
const { userSchemas } = require('../schemas');
const { validateBody, checkAuth } = require('../middlewares');

const router = express.Router();

router.post(
  '/register',
  validateBody(userSchemas.register),
  ctrlUsers.register
);

router.post('/login', validateBody(userSchemas.login), ctrlUsers.login);

router.post('/logout', checkAuth, ctrlUsers.logout);

router.get('/current', checkAuth, ctrlUsers.current);

module.exports = router;
