const jwt = require('jsonwebtoken');

const { User } = require('../models');
const { customError } = require('../utils');

const { JWT_SECRET_KEY } = process.env;

const checkAuth = async (req, res, next) => {
  try {
    const { authorization = '' } = req.headers;
    const [tokenType, token] = authorization.split(' ');
    
    if (tokenType !== 'Bearer') {
      throw customError(400, 'Invalid token type');
    }
    if (!token) {
      throw customError(400, 'Token required');
    }

    const { id } = jwt.verify(token, JWT_SECRET_KEY);
    const user = await User.findById(id);

    if (!user) throw customError(404, 'User not found/registered');
    if (user.token !== token) throw customError(401, 'User not authorized');

    req.user = user;
    next();
  } catch (error) {
    res.status(error.status || 401).json({ message: error.message });
  }
};

module.exports = checkAuth;
