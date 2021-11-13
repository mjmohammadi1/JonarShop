const { database } = require('../../db');
const { userSchema } = require('../../schemas');
const { authHelper, ApiError } = require('../../utils');

module.exports = ({ _database = database } = {}) => {
  _database
    .then((connection) => {})
    .catch((err) => {
      throw ApiError.internal(err);
    });

  return {
    async registerUser(username, password, email) {
      const hashedPassword = await authHelper.hashPassword(password);
      const newUser = new userSchema({
        username: username,
        email: email,
        password: hashedPassword,
      });
      return await newUser.save();
    },

    async loginUser(username, password) {
      const user = await userSchema.findOne({ username: username });
      if (!user) {
        throw ApiError.notFound('Invalid credentials!');
      }
      const isValidPassword = await authHelper.verifyPassword(password, user.password);
      if (!isValidPassword) {
        throw ApiError.notFound('Invalid credentials!');
      }
      const { password: pass, ...userProfile } = user._doc;
      const accessToken = authHelper.genAccessToken(userProfile._id, userProfile.isAdmin);
      return { ...userProfile, accessToken };
    },
  };
};
