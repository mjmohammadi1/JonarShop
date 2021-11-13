const { userService } = require('../../services');

module.exports = ({ _userService = userService } = {}) => {
  return {
    async updateUser(req, res, next) {
      try {
        const updateduser = await _userService().updateUserPassword({ id: req.params.id, password: req.body.password });
        res.status(201).json({ updateduser });
      } catch (err) {
        next(err);
      }
    },
    async deleteUser(req, res, next) {
      try {
        const deleteResult = await _userService().deleteUser({ id: req.params.id });
        res.status(200).json({ deleteResult });
      } catch (err) {
        next(err);
      }
    },
    async getUser(req, res, next) {
      try {
        const user = await _userService().getUser({ id: req.params.id });
        res.status(200).json(user);
      } catch (err) {
        next(err);
      }
    },
    async getUsers(req, res, next) {
      try {
        const users = await _userService().getUsers({ query: req.query.new });
        res.status(200).json(users);
      } catch (err) {
        next(err);
      }
    },
    async getUsersStats(req, res, next) {
      try {
        const userStats = await _userService().getUsersStats();
        res.status(200).json(userStats);
      } catch (err) {
        next(err);
      }
    },
  };
};
