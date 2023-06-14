const { User } = require('../../services/models');
const { ctrlWrapper } = require('../../utils');

const logout = async (req, res, next) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });
  // res.status = 204;
  res.status(200).json({ message: 'Logout successful' });
};

module.exports = { logout: ctrlWrapper(logout) };
