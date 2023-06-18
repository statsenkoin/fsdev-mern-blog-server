const Joi = require('joi');

const { emailRegExp } = require('../../../config/constants');

const register = Joi.object({
  username: Joi.string().allow(''),
  email: Joi.string().required().pattern(emailRegExp),
  password: Joi.string().required().min(6),
});

module.exports = register;
