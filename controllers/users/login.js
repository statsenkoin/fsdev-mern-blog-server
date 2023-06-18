const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../../services/models');
const { ctrlWrapper, customError } = require('../../utils');

const { JWT_SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw customError(401, 'Email or password is not valid');

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw customError(401, 'Email or password is not valid');
  }
  const jwtPayload = {
    id: user._id,
  };
  const token = jwt.sign(jwtPayload, JWT_SECRET_KEY, { expiresIn: '24h' });
  await User.findByIdAndUpdate(user._id, { token });

  res.status(200).json({
    username: user.username,
    email,
    token,
    message: 'Login successful',
  });
};

module.exports = { login: ctrlWrapper(login) };
