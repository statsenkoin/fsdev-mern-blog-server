const { ctrlWrapper } = require('../../utils');

const current = async (req, res, next) => {
  const { _id, username, email } = req.user;
  res.status(200).json({ _id, username, email });
};

module.exports = { current: ctrlWrapper(current) };
