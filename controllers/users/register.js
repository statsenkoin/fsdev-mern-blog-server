const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../../services/models');
const { ctrlWrapper, customError } = require('../../utils');

const { JWT_SECRET_KEY } = process.env;

const register = async (req, res, next) => {
  let { username, email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) throw customError(400, 'Email is allready in use');

  if (!username) username = email.split('@')[0];

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  const { _id } = await User.findOne({ email });
  console.log('_id :>> ', _id);
  const jwtPayload = { id: _id };
  const token = jwt.sign(jwtPayload, JWT_SECRET_KEY, { expiresIn: '24h' });
  await User.findByIdAndUpdate(_id, { token });

  res.status(201).json({
    username: newUser.username,
    email: newUser.email,
    token,
    message: 'Login successful',
  });
};

module.exports = { register: ctrlWrapper(register) };
