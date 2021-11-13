const { authDAO } = require('../../dao');

module.exports = ({ _authDAO = authDAO } = {}) => {
  return {
    async registerUser(params) {
      const { username, password, email } = params;
      return _authDAO().registerUser(username, password, email);
    },
    async loginUser(params) {
      const { username, password } = params;
      return _authDAO().loginUser(username, password);
    },
  };
};
