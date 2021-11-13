const { userDAO } = require('../../dao');

module.exports = ({ _userDAO = userDAO } = {}) => {
  return {
    async updateUserPassword(params) {
      const { id, password } = params;
      return _userDAO().updateUserPassword(id, password);
    },

    async deleteUser(params) {
      const { id } = params;
      return _userDAO().deleteUser(id);
    },

    async getUser(params) {
      const { id } = params;
      return _userDAO().getUser(id);
    },

    async getUsers(params) {
      const { query } = params;
      return _userDAO().getUsers(query);
    },

    async getUsersStats() {
      return _userDAO().getUsersStats();
    },
  };
};
