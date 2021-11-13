const { authService } = require('../../services');

module.exports = ({ _authService = authService } = {}) => {
  return {
    async registerUser(req, res, next) {
      try {
        const registeredUser = await _authService().registerUser(req.body);
        res.status(201).json(registeredUser);
      } catch (err) {
        next(err);
      }
    },

    async loginUser(req, res, next) {
      try {
        const signedInUser = await _authService().loginUser(req.body);
        res.status(200).json(signedInUser);
      } catch (err) {
        next(err);
      }
    },
  };
};
