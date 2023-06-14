const mongoose = require('mongoose');

const { handleMongooseError } = require('../utils');
const { emailRegExp } = require('../constants');

const userSchema = new mongoose.Schema(
  {
    username: { type: String },
    email: { type: String, required: true, unique: true, match: emailRegExp },
    password: { type: String, required: true, minlength: 6 },
    token: { type: String, default: null },
  },
  { timestamps: true, versionKey: false }
);

userSchema.post('save', handleMongooseError);

const User = mongoose.model('user', userSchema);
module.exports = User;
