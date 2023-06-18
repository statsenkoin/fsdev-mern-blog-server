const { ctrlWrapper } = require('../../utils');

const current = async (req, res, next) => {
  const { username, email, token } = req.user;
  res.status(200).json({ username, email, token });
};

module.exports = { current: ctrlWrapper(current) };
