const bcrypt = require('bcrypt');

const { User } = require('../../models');
const { ctrlWrapper, customError } = require('../../utils');

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

  res.status(201).json({ username: newUser.username, email: newUser.email });
};

module.exports = { register: ctrlWrapper(register) };
