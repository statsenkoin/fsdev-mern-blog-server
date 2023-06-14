const Joi = require('joi');

const { emailRegExp } = require('../../constants');

const login = Joi.object({
  email: Joi.string().required().pattern(emailRegExp),
  password: Joi.string().required().min(6),
});

module.exports = login;
