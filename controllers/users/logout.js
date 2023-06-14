const { User } = require('../../models');
const { ctrlWrapper } = require('../../utils');

const logout = async (req, res, next) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });
  res.status.message = 'No content';
  res.status(204).end();
};

module.exports = { logout: ctrlWrapper(logout) };
