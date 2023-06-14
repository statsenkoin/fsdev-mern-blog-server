const Joi = require('joi');

const { emailRegExp } = require('../../../config/constants');

const login = Joi.object({
  email: Joi.string().required().pattern(emailRegExp),
  password: Joi.string().required().min(6),
});

module.exports = login;
