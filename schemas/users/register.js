const Joi = require('joi');

const { emailRegExp } = require('../../constants');

const register = Joi.object({
  username: Joi.string(),
  email: Joi.string().required().pattern(emailRegExp),
  password: Joi.string().required().min(6),
});

module.exports = register;
