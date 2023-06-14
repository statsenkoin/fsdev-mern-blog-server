const { customError } = require('../utils');

const validateBody = (schema) => {
  return async (req, res, next) => {
    const { error } = await schema.validate({ ...req.body });
    if (error) {
      next(customError(400, 'Missing required fields'));
    }
    next();
  };
};

module.exports = validateBody;
