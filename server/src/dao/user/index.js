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
    async updateUserPassword(id, password) {
      const hashedPassword = await authHelper.hashPassword(password);
      const updateduser = await userSchema.findByIdAndUpdate(
        id,
        {
          password: hashedPassword,
        },
        { new: true }
      );
      return updateduser;
    },
    async deleteUser(id, password) {
      const deleteResult = await userSchema.findByIdAndDelete(id);
      if (deleteResult === null) {
        throw ApiError.notFound('Not Found');
      }
      return deleteResult;
    },
    async getUser(id) {
      const foundUser = await userSchema.findById(id);
      if (foundUser === null) {
        throw ApiError.notFound('Not Found');
      }
      const { password, ...userProfile } = foundUser._doc;
      return userProfile;
    },
    async getUsers(query) {
      const users = query ? await userSchema.find().sort({ _id: -1 }).limit(5) : await userSchema.find();
      return users;
    },
    async getUsersStats() {
      const date = new Date();
      const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
      const usersStats = await userSchema.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: '$createdAt' },
          },
        },
        {
          $group: {
            _id: '$month',
            total: { $sum: 1 },
          },
        },
      ]);
      return usersStats;
    },
  };
};
